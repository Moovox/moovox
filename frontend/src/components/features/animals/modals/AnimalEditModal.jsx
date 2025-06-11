import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { animalService } from "../../../../services/animalService";
import FormModal from "../../../ui/form-modal";
import { Input } from "../../../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../ui/select";
import { useToast } from "../../../ui/use-toast";

const statusOptions = [
  { value: "healthy", label: "Healthy" },
  { value: "in_treatment", label: "In Treatment" },
  { value: "recovering", label: "Recovering" },
  { value: "sick", label: "Sick" },
];

function AnimalEditModal({ animal, open, onOpenChange, onSuccess }) {
  const [loading, setLoading] = useState(false);
  const [species, setSpecies] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    speciesId: "",
    breedId: "",
    birthDate: "",
    weight: "",
    status: "healthy",
  });
  const [errors, setErrors] = useState({});
  const { toast } = useToast();

  // Load species on mount
  useEffect(() => {
    setSpecies(animalService.getSpecies());
  }, []);

  // Load animal data when animal prop changes
  useEffect(() => {
    if (animal && open) {
      // Map backend data to form fields
      // Find species ID by name - try multiple approaches
      let speciesId = "";
      const allSpecies = animalService.getSpecies();

      // Try to match by exact name first
      let speciesItem = allSpecies.find(
        (s) => s.name === animal.species || s.label === animal.species,
      );

      // If not found, try case-insensitive matching
      if (!speciesItem) {
        speciesItem = allSpecies.find(
          (s) =>
            s.name.toLowerCase() === animal.species.toLowerCase() ||
            s.label.toLowerCase() === animal.species.toLowerCase(),
        );
      }

      speciesId = speciesItem ? speciesItem.id.toString() : "";

      // Set form data with values from animal
      setFormData({
        name: animal.name || "",
        speciesId: speciesId,
        breedId: "", // Will be set when breeds are loaded
        birthDate: animal.birthDate
          ? new Date(animal.birthDate).toISOString().split("T")[0]
          : "",
        weight: animal.weight ? animal.weight.toString() : "",
        status: animal.status || "healthy",
      });

      // If we have a species, load breeds
      if (speciesId) {
        const breedList = animalService.getBreedsBySpecies(parseInt(speciesId));
        setBreeds(breedList);

        // Find breed ID by name - try multiple approaches
        let breedItem = breedList.find((b) => b.name === animal.breed);

        // If not found, try case-insensitive matching
        if (!breedItem) {
          breedItem = breedList.find(
            (b) => b.name.toLowerCase() === animal.breed.toLowerCase(),
          );
        }

        if (breedItem) {
          setFormData((prev) => ({
            ...prev,
            breedId: breedItem.id.toString(),
          }));
        }
      }
    }
  }, [animal, open]);

  // Load breeds when species changes
  useEffect(() => {
    if (formData.speciesId) {
      const breedList = animalService.getBreedsBySpecies(
        parseInt(formData.speciesId),
      );
      setBreeds(breedList);

      // Reset breed if it's not in the new list of breeds
      const breedExists = breedList.some(
        (b) => b.id.toString() === formData.breedId,
      );
      if (!breedExists) {
        setFormData((prev) => ({ ...prev, breedId: "" }));
      }
    } else {
      setBreeds([]);
      setFormData((prev) => ({ ...prev, breedId: "" }));
    }
  }, [formData.speciesId]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.speciesId) {
      newErrors.speciesId = "Species is required";
    }

    if (!formData.breedId) {
      newErrors.breedId = "Breed is required";
    }

    if (!formData.birthDate) {
      newErrors.birthDate = "Birth date is required";
    } else {
      const today = new Date();
      const birthDate = new Date(formData.birthDate);

      if (birthDate > today) {
        newErrors.birthDate = "Birth date cannot be in the future";
      }
    }

    if (!formData.weight) {
      newErrors.weight = "Weight is required";
    } else if (
      isNaN(parseFloat(formData.weight)) ||
      parseFloat(formData.weight) <= 0
    ) {
      newErrors.weight = "Weight must be a positive number";
    }

    if (!formData.status) {
      newErrors.status = "Status is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    try {
      await animalService.updateAnimal(animal.id, formData);

      toast({
        title: "Success",
        description: "Animal updated successfully!",
        variant: "success",
      });

      if (onOpenChange) {
        onOpenChange(false);
      }

      if (onSuccess) {
        await onSuccess();
      }
    } catch (error) {
      console.error("Error updating animal:", error);

      toast({
        title: "Error updating animal",
        description:
          error.message || "An error occurred while updating the animal",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormModal
      title="Edit Animal"
      open={open}
      onOpenChange={onOpenChange}
      onSubmit={handleSubmit}
      loading={loading}
      submitText="Save"
      cancelText="Cancel"
    >
      <div className="flex flex-col gap-4">
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-amber-900">
            Name (Optional)
          </label>
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter animal name"
            className="border-amber-200"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-amber-900">Species</label>
          <Select
            value={formData.speciesId}
            onValueChange={(value) => handleSelectChange("speciesId", value)}
            required
          >
            <SelectTrigger
              className={`${errors.speciesId ? "border-red-500" : "border-amber-200"}`}
            >
              <SelectValue placeholder="Select species">
                {species.map((item) => (
                  <SelectItem key={item.id} value={item.id.toString()}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {species.map((item) => (
                <SelectItem key={item.id} value={item.id.toString()}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.speciesId && (
            <span className="text-xs text-red-500">{errors.speciesId}</span>
          )}
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-amber-900">Breed</label>
          <Select
            value={formData.breedId}
            onValueChange={(value) => handleSelectChange("breedId", value)}
            disabled={!formData.speciesId}
            required
          >
            <SelectTrigger
              className={`${errors.breedId ? "border-red-500" : "border-amber-200"}`}
            >
              <SelectValue
                placeholder={
                  formData.speciesId ? "Select breed" : "Select species first"
                }
              >
                {breeds.map((item) => (
                  <SelectItem key={item.id} value={item.id.toString()}>
                    {item.name}
                  </SelectItem>
                ))}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {breeds.map((item) => (
                <SelectItem key={item.id} value={item.id.toString()}>
                  {item.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.breedId && (
            <span className="text-xs text-red-500">{errors.breedId}</span>
          )}
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-amber-900">
            Birth Date
          </label>
          <Input
            name="birthDate"
            type="date"
            value={formData.birthDate}
            onChange={handleChange}
            max={new Date().toISOString().split("T")[0]}
            className={`${errors.birthDate ? "border-red-500" : "border-amber-200"}`}
            required
          />
          {errors.birthDate && (
            <span className="text-xs text-red-500">{errors.birthDate}</span>
          )}
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-amber-900">
            Weight (kg)
          </label>
          <Input
            name="weight"
            type="number"
            min="0"
            step="0.1"
            value={formData.weight}
            onChange={handleChange}
            placeholder="Enter weight in kg"
            className={`${errors.weight ? "border-red-500" : "border-amber-200"}`}
            required
          />
          {errors.weight && (
            <span className="text-xs text-red-500">{errors.weight}</span>
          )}
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-amber-900">
            Health Status
          </label>
          <Select
            value={formData.status}
            onValueChange={(value) => handleSelectChange("status", value)}
            required
          >
            <SelectTrigger
              className={`${errors.status ? "border-red-500" : "border-amber-200"}`}
            >
              <SelectValue placeholder="Select status">
                {statusOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {statusOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.status && (
            <span className="text-xs text-red-500">{errors.status}</span>
          )}
        </div>
      </div>
    </FormModal>
  );
}

AnimalEditModal.propTypes = {
  animal: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  onOpenChange: PropTypes.func.isRequired,
  onSuccess: PropTypes.func,
};

export default AnimalEditModal;
