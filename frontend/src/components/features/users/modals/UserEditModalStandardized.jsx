import React, { useEffect, useState } from "react";
import { userService } from "../../../../services/userService";
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

const userTypeOptions = [
  { value: "Administrator", label: "Administrator" },
  { value: "Farmer", label: "Farmer" },
  { value: "Farmhand", label: "Employee" },
  { value: "Veterinarian", label: "Veterinarian" },
];

const roleMapping = {
  ADMIN: "Administrator",
  FARMER: "Farmer",
  FARMHAND: "Farmhand",
  VETERINARY: "Veterinarian",
};

const reverseRoleMapping = {
  Administrator: "ADMIN",
  Farmer: "FARMER",
  Farmhand: "FARMHAND",
  Veterinarian: "VETERINARY",
};

function UserEditModalStandardized({ user, open, onOpenChange, onSuccess }) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    userType: "",
  });
  const [errors, setErrors] = useState({});
  const { toast } = useToast();

  // Load user data when user prop changes
  useEffect(() => {
    if (user && open) {
      // Map role to userType more robustly
      let userType = "";

      // Try direct mapping first
      if (roleMapping[user.role]) {
        userType = roleMapping[user.role];
      } else {
        // Try to find by matching role values
        const roleEntry = Object.entries(roleMapping).find(
          ([key, value]) => key === user.role || value === user.role,
        );
        userType = roleEntry ? roleEntry[1] : "";
      }

      setFormData({
        name: user.name || "",
        email: user.email || "",
        userType: userType,
      });
      setErrors({});
    }
  }, [user, open]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name?.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email?.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }

    if (!formData.userType) {
      newErrors.userType = "User type is required";
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
      const userData = {
        name: formData.name,
        email: formData.email,
        role: reverseRoleMapping[formData.userType],
      };

      await userService.updateUser(user.id, userData);

      toast({
        title: "Success",
        description: "User updated successfully!",
        variant: "success",
      });

      if (onOpenChange) {
        onOpenChange(false);
      }

      if (onSuccess) {
        await onSuccess();
      }
    } catch (error) {
      console.error("Error updating user:", error);
      toast({
        title: "Error updating user",
        description:
          error.message || "An error occurred while updating the user",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormModal
      title="Edit User"
      open={open}
      onOpenChange={onOpenChange}
      onSubmit={handleSubmit}
      loading={loading}
      submitText="Save"
      cancelText="Cancel"
    >
      <div className="flex flex-col gap-4">
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-amber-900">Name *</label>
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter full name"
            className={`${errors.name ? "border-red-500" : "border-amber-200"}`}
          />
          {errors.name && (
            <span className="text-xs text-red-500">{errors.name}</span>
          )}
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-medium text-amber-900">Email *</label>
          <Input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
            className={`${
              errors.email ? "border-red-500" : "border-amber-200"
            }`}
          />
          {errors.email && (
            <span className="text-xs text-red-500">{errors.email}</span>
          )}
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-medium text-amber-900">
            User Type *
          </label>
          <Select
            value={formData.userType}
            onValueChange={(value) => handleSelectChange("userType", value)}
          >
            <SelectTrigger
              className={`${
                errors.userType ? "border-red-500" : "border-amber-200"
              }`}
            >
              <SelectValue placeholder="Select user type">
                {userTypeOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {userTypeOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.userType && (
            <span className="text-xs text-red-500">{errors.userType}</span>
          )}
        </div>
      </div>
    </FormModal>
  );
}

export default UserEditModalStandardized;
