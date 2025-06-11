import { PlusCircle } from "lucide-react";
import React, { useEffect, useState } from "react";
import { animalService } from "../../../../services/animalService";
import { Button } from "../../../ui/button";
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

function AnimalCreateModalStandardized({ onSuccess }) {
  const [open, setOpen] = useState(false);
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

  // Load breeds when species changes
  useEffect(() => {
    if (formData.speciesId) {
      const breedList = animalService.getBreedsBySpecies(
        parseInt(formData.speciesId),
      );
      setBreeds(breedList);
      // Reset breed selection when species changes
      setFormData((prev) => ({ ...prev, breedId: "" }));
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

  const resetForm = () => {
    setFormData({
      name: "",
      speciesId: "",
      breedId: "",
      birthDate: "",
      weight: "",
      status: "healthy",
    });
    setErrors({});
    setBreeds([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    try {
      const animalData = {
        name: formData.name,
        speciesId: parseInt(formData.speciesId),
        breedId: parseInt(formData.breedId),
        birthDate: formData.birthDate,
        weight: parseFloat(formData.weight),
        status: formData.status,
      };

      await animalService.createAnimal(animalData);

      toast({
        title: "Success",
        description: "Animal created successfully!",
        variant: "success",
      });

      setOpen(false);
      resetForm();

      if (onSuccess) {
        await onSuccess();
      }
    } catch (error) {
      console.error("Error creating animal:", error);
      toast({
        title: "Error creating animal",
        description:
          error.message || "An error occurred while creating the animal",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
    if (!newOpen) {
      resetForm();
    }
  };

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className="bg-amber-600 text-white shadow-sm transition-all duration-200 hover:bg-amber-700"
      >
        <PlusCircle className="mr-2 h-4 w-4" />
        Add Animal
      </Button>

      <FormModal
        title="Add New Animal"
        open={open}
        onOpenChange={handleOpenChange}
        onSubmit={handleSubmit}
        loading={loading}
        submitText="Add Animal"
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
            <label className="text-sm font-medium text-amber-900">
              Species *
            </label>
            <Select
              value={formData.speciesId}
              onValueChange={(value) => handleSelectChange("speciesId", value)}
            >
              <SelectTrigger
                className={`${
                  errors.speciesId ? "border-red-500" : "border-amber-200"
                }`}
              >
                <SelectValue placeholder="Select species" />
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
            <label className="text-sm font-medium text-amber-900">
              Breed *
            </label>
            <Select
              value={formData.breedId}
              onValueChange={(value) => handleSelectChange("breedId", value)}
              disabled={!formData.speciesId}
            >
              <SelectTrigger
                className={`${
                  errors.breedId ? "border-red-500" : "border-amber-200"
                }`}
              >
                <SelectValue
                  placeholder={
                    formData.speciesId ? "Select breed" : "Select species first"
                  }
                />
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
              Birth Date *
            </label>
            <Input
              name="birthDate"
              type="date"
              value={formData.birthDate}
              onChange={handleChange}
              max={new Date().toISOString().split("T")[0]}
              className={`${
                errors.birthDate ? "border-red-500" : "border-amber-200"
              }`}
            />
            {errors.birthDate && (
              <span className="text-xs text-red-500">{errors.birthDate}</span>
            )}
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-amber-900">
              Weight (kg) *
            </label>
            <Input
              name="weight"
              type="number"
              min="0"
              step="0.1"
              value={formData.weight}
              onChange={handleChange}
              placeholder="Enter weight in kg"
              className={`${
                errors.weight ? "border-red-500" : "border-amber-200"
              }`}
            />
            {errors.weight && (
              <span className="text-xs text-red-500">{errors.weight}</span>
            )}
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-amber-900">
              Health Status *
            </label>
            <Select
              value={formData.status}
              onValueChange={(value) => handleSelectChange("status", value)}
            >
              <SelectTrigger
                className={`${
                  errors.status ? "border-red-500" : "border-amber-200"
                }`}
              >
                <SelectValue placeholder="Select status" />
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
    </>
  );
}

export default AnimalCreateModalStandardized;
