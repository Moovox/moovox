import { UserPlus } from "lucide-react";
import React, { useState } from "react";
import { useFarm } from "../../../../context/FarmContext";
import { userService } from "../../../../services/userService";
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

const userTypeOptions = [
  { value: "Administrator", label: "Administrator" },
  { value: "Farmer", label: "Farmer" },
  { value: "Farmhand", label: "Employee" },
  { value: "Veterinarian", label: "Veterinarian" },
];

const roleMapping = {
  Administrator: "ADMIN",
  Farmer: "FARMER",
  Farmhand: "FARMHAND",
  Veterinarian: "VETERINARY",
};

function UserCreateModalStandardized({ onSuccess }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    userType: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const { toast } = useToast();
  const { currentFarmId } = useFarm();

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

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
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
      email: "",
      userType: "",
      password: "",
      confirmPassword: "",
    });
    setErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    if (!currentFarmId) {
      toast({
        title: "Error",
        description: "Please select a farm before creating a user",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const userData = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: roleMapping[formData.userType],
        farmId: parseInt(currentFarmId),
      };

      await userService.createUser(userData);

      toast({
        title: "Success",
        description: "User created successfully!",
        variant: "success",
      });

      setOpen(false);
      resetForm();

      if (onSuccess) {
        await onSuccess();
      }
    } catch (error) {
      console.error("Error creating user:", error);
      toast({
        title: "Error creating user",
        description:
          error.message || "An error occurred while creating the user",
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
        <UserPlus className="mr-2 h-4 w-4" />
        Add User
      </Button>

      <FormModal
        title="Create New User"
        open={open}
        onOpenChange={handleOpenChange}
        onSubmit={handleSubmit}
        loading={loading}
        submitText="Add User"
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
              className={`${
                errors.name ? "border-red-500" : "border-amber-200"
              }`}
            />
            {errors.name && (
              <span className="text-xs text-red-500">{errors.name}</span>
            )}
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-amber-900">
              Email *
            </label>
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
                <SelectValue placeholder="Select user type" />
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

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-amber-900">
              Password *
            </label>
            <Input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              className={`${
                errors.password ? "border-red-500" : "border-amber-200"
              }`}
            />
            {errors.password && (
              <span className="text-xs text-red-500">{errors.password}</span>
            )}
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-amber-900">
              Confirm Password *
            </label>
            <Input
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
              className={`${
                errors.confirmPassword ? "border-red-500" : "border-amber-200"
              }`}
            />
            {errors.confirmPassword && (
              <span className="text-xs text-red-500">
                {errors.confirmPassword}
              </span>
            )}
          </div>
        </div>
      </FormModal>
    </>
  );
}

export default UserCreateModalStandardized;
