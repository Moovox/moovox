import { Pencil } from "lucide-react";
import React from "react";
import { userService } from "../../services/userService";
import { Button } from "../ui/button";
import FormModal from "../ui/form-modal";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useToast } from "../ui/use-toast";

const roleMapping = {
  Administrator: "ADMIN",
  Farmer: "FARMER",
  Farmhand: "FARMHAND",
  Veterinarian: "VETERINARY",
};

const userTypes = [
  { value: "Administrator", label: "Administrator" },
  { value: "Farmer", label: "Farmer" },
  { value: "Farmhand", label: "Farmhand" },
  { value: "Veterinarian", label: "Veterinarian" },
];

function UserEditModal({ user, onSuccess }) {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    userType: "",
  });
  const [errors, setErrors] = React.useState({});
  const { toast } = useToast();

  React.useEffect(() => {
    if (user && open) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        userType: user.type || "",
      });
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
      newErrors.email = "Invalid email format";
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

  const handleSelectChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      userType: value,
    }));
    if (errors.userType) {
      setErrors((prev) => ({
        ...prev,
        userType: "",
      }));
    }
  };

  const resetForm = () => {
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        userType: user.type || "",
      });
    }
    setErrors({});
  };

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
    if (!newOpen) {
      resetForm();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    try {
      const farmId = parseInt(localStorage.getItem("farmId"), 10);
      if (!farmId || isNaN(farmId)) {
        throw new Error("Farm ID not found or invalid");
      }

      const userData = {
        name: formData.name,
        email: formData.email,
        role: roleMapping[formData.userType],
        farmId,
      };

      await userService.updateUser(user.id, userData);

      toast({
        title: "Success",
        description: "User updated successfully!",
        variant: "success",
      });

      handleOpenChange(false);
      if (onSuccess) {
        await onSuccess();
      }
    } catch (error) {
      console.error("Error updating user:", error);

      toast({
        title: "Error updating user",
        description:
          error.response?.data?.message ||
          error.message ||
          "An error occurred while updating the user",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button
        size="icon"
        variant="ghost"
        className="text-amber-700 transition-colors hover:bg-amber-100 hover:text-amber-800"
        title="Edit"
        onClick={() => setOpen(true)}
      >
        <Pencil className="h-4 w-4" />
      </Button>

      <FormModal
        title="Edit User"
        open={open}
        onOpenChange={handleOpenChange}
        onSubmit={handleSubmit}
        loading={loading}
        submitText="Save"
        cancelText="Cancel"
      >
        <div className="flex flex-col gap-4">
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-amber-900">Name</label>
            <Input
              name="name"
              value={formData.name || ""}
              onChange={handleChange}
              placeholder="Enter full name"
              className={`${errors.name ? "border-red-500" : "border-amber-200"}`}
              required
            />
            {errors.name && (
              <span className="text-xs text-red-500">{errors.name}</span>
            )}
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-amber-900">Email</label>
            <Input
              name="email"
              type="email"
              value={formData.email || ""}
              onChange={handleChange}
              placeholder="Enter email"
              className={`${errors.email ? "border-red-500" : "border-amber-200"}`}
              required
            />
            {errors.email && (
              <span className="text-xs text-red-500">{errors.email}</span>
            )}
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-amber-900">
              User Type
            </label>
            <Select
              value={formData.userType || ""}
              onValueChange={handleSelectChange}
              required
            >
              <SelectTrigger
                className={`${errors.userType ? "border-red-500" : "border-amber-200"}`}
              >
                <SelectValue placeholder="Select user type" />
              </SelectTrigger>
              <SelectContent>
                {userTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
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
    </>
  );
}

export default UserEditModal;
