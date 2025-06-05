import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { farmService } from "../../../services/farmService";
import FormModal from "../../ui/form-modal";
import { Input } from "../../ui/input";
import { Textarea } from "../../ui/textarea";
import { useToast } from "../../ui/use-toast";

function FarmEditModal({ farm, open, onOpenChange, onSuccess }) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    size: "",
    description: "",
  });
  const [errors, setErrors] = useState({});
  const { toast } = useToast();

  useEffect(() => {
    if (farm && open) {
      setFormData({
        name: farm.name || "",
        location: farm.location || "",
        size: farm.size ? farm.size.toString() : "",
        description: farm.description || "",
      });
    }
  }, [farm, open]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name?.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.location?.trim()) {
      newErrors.location = "Location is required";
    }

    if (!formData.size?.trim()) {
      newErrors.size = "Size is required";
    } else if (isNaN(formData.size) || parseFloat(formData.size) <= 0) {
      newErrors.size = "Size must be a positive number";
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    try {
      const farmData = {
        ...formData,
        size: parseFloat(formData.size),
      };

      await farmService.updateFarm(farm.id, farmData);

      toast({
        title: "Success",
        description: "Farm updated successfully!",
        variant: "success",
      });

      if (onOpenChange) {
        onOpenChange(false);
      }

      if (onSuccess) {
        await onSuccess();
      }
    } catch (error) {
      console.error("Error updating farm:", error);

      toast({
        title: "Error updating farm",
        description:
          error.message || "An error occurred while updating the farm",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormModal
      title="Edit Farm"
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
            Farm Name
          </label>
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter farm name"
            className={`${errors.name ? "border-red-500" : "border-amber-200"}`}
            required
          />
          {errors.name && (
            <span className="text-xs text-red-500">{errors.name}</span>
          )}
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-medium text-amber-900">Location</label>
          <Input
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Enter farm location"
            className={`${errors.location ? "border-red-500" : "border-amber-200"}`}
            required
          />
          {errors.location && (
            <span className="text-xs text-red-500">{errors.location}</span>
          )}
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-medium text-amber-900">
            Size (hectares)
          </label>
          <Input
            name="size"
            type="number"
            value={formData.size}
            onChange={handleChange}
            placeholder="Enter farm size in hectares"
            className={`${errors.size ? "border-red-500" : "border-amber-200"}`}
            required
            min="0.1"
            step="0.1"
          />
          {errors.size && (
            <span className="text-xs text-red-500">{errors.size}</span>
          )}
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-medium text-amber-900">
            Description (Optional)
          </label>
          <Textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter farm description"
            className="resize-none border-amber-200"
            rows={3}
          />
        </div>
      </div>
    </FormModal>
  );
}

FarmEditModal.propTypes = {
  farm: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  onOpenChange: PropTypes.func.isRequired,
  onSuccess: PropTypes.func,
};

export default FarmEditModal;
