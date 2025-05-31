import React, { useEffect } from 'react';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import FormModal from '../ui/form-modal';
import { userService } from '../../services/userService';
import { useToast } from '../ui/use-toast';
import { useFarm } from '../../context/FarmContext';

const roleMapping = {
    'Administrator': 'ADMIN',
    'Farmer': 'FARMER',
    'Farmhand': 'FARMHAND',
    'Veterinarian': 'VETERINARY'
};

const userTypes = [
    { value: 'Administrator', label: 'Administrator' },
    { value: 'Farmer', label: 'Farmer' },
    { value: 'Farmhand', label: 'Farmhand' },
    { value: 'Veterinarian', label: 'Veterinarian' },
];

const initialFormData = {
    name: '',
    email: '',
    userType: '',
    password: '',
    confirmPassword: ''
};

/**
 * Modal component for creating new users
 */
function UserCreateModal({ onSuccess }) {
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [formData, setFormData] = React.useState(initialFormData);
    const [errors, setErrors] = React.useState({});
    const { toast } = useToast();
    const { farmInfo, currentFarmId } = useFarm();
    
    // Close the modal if the farm changes while it's open
    useEffect(() => {
        if (open) {
            const handleFarmChange = () => {
                handleOpenChange(false);
                toast({
                    title: "Information",
                    description: "The selected farm has changed. Please try again.",
                    variant: "primary"
                });
            };
            
            window.addEventListener('farmChanged', handleFarmChange);
            return () => window.removeEventListener('farmChanged', handleFarmChange);
        }
    }, [open, toast]);

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name?.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email?.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }

        if (!formData.userType) {
            newErrors.userType = 'User type is required';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters long';
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        // Check if a farm is selected
        if (!currentFarmId) {
            newErrors.farm = 'No farm selected. Please select a farm before creating a user.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear the error when the user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSelectChange = (value) => {
        setFormData(prev => ({
            ...prev,
            userType: value
        }));
        if (errors.userType) {
            setErrors(prev => ({
                ...prev,
                userType: ''
            }));
        }
    };

    const resetForm = () => {
        setFormData(initialFormData);
        setErrors({});
    };

    const handleOpenChange = (newOpen) => {
        // Verify that a farm is selected before opening the modal
        if (newOpen && !currentFarmId) {
            toast({
                title: "Warning",
                description: "Please select a farm before creating a user.",
                variant: "warning"
            });
            return;
        }
        
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
            // Use currentFarmId from farm context
            if (!currentFarmId) {
                throw new Error('No farm selected. Please select a farm before creating a user.');
            }

            const userData = {
                name: formData.name,
                email: formData.email,
                password: formData.password,
                role: roleMapping[formData.userType],
                farmId: parseInt(currentFarmId, 10)
            };

            const response = await userService.createUser(userData);
            
            toast({
                title: "Success",
                description: "User created successfully!",
                variant: "success"
            });
            
            handleOpenChange(false);
            if (onSuccess) {
                onSuccess();
            }
        } catch (error) {
            console.error('Complete error:', error);
            
            // Specific messages for different error types
            if (error.message.includes('already exists')) {
                toast({
                    title: "Email already registered",
                    description: "A user with this email already exists in the system.",
                    variant: "destructive"
                });
            } else if (error.message.includes('farm')) {
                toast({
                    title: "Farm error",
                    description: error.message || 'There is a problem with the selected farm',
                    variant: "destructive"
                });
            } else {
                toast({
                    title: "Error creating user",
                    description: error.message || 'An error occurred while creating the user',
                    variant: "destructive"
                });
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <FormModal
            title="Create New User"
            triggerText="New User"
            open={open}
            onOpenChange={handleOpenChange}
            onSubmit={handleSubmit}
            loading={loading}
            submitText="Create"
            cancelText="Cancel"
        >
            {errors.farm && (
                <div className="mb-4 p-2 bg-red-50 border border-red-200 rounded text-red-600 text-sm">
                    {errors.farm}
                </div>
            )}
            
            {farmInfo && (
                <div className="mb-4 p-2 bg-amber-50 border border-amber-200 rounded text-amber-800 text-sm">
                    The user will be registered to farm: <strong>{farmInfo.name}</strong>
                </div>
            )}
            
            <div className="flex flex-col gap-4">
                <div className="space-y-1.5">
                    <label className="text-sm font-medium text-amber-900">Name</label>
                    <Input
                        name="name"
                        value={formData.name || ''}
                        onChange={handleChange}
                        placeholder="Enter full name"
                        className={`${errors.name ? 'border-red-500' : 'border-amber-200'}`}
                        required
                    />
                    {errors.name && <span className="text-xs text-red-500">{errors.name}</span>}
                </div>
                <div className="space-y-1.5">
                    <label className="text-sm font-medium text-amber-900">Email</label>
                    <Input
                        name="email"
                        type="email"
                        value={formData.email || ''}
                        onChange={handleChange}
                        placeholder="Enter email"
                        className={`${errors.email ? 'border-red-500' : 'border-amber-200'}`}
                        required
                    />
                    {errors.email && <span className="text-xs text-red-500">{errors.email}</span>}
                </div>
                <div className="space-y-1.5">
                    <label className="text-sm font-medium text-amber-900">User Type</label>
                    <Select
                        value={formData.userType || ''}
                        onValueChange={handleSelectChange}
                        required
                    >
                        <SelectTrigger className={`${errors.userType ? 'border-red-500' : 'border-amber-200'}`}>
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
                    {errors.userType && <span className="text-xs text-red-500">{errors.userType}</span>}
                </div>
                <div className="space-y-1.5">
                    <label className="text-sm font-medium text-amber-900">Password</label>
                    <Input
                        name="password"
                        type="password"
                        value={formData.password || ''}
                        onChange={handleChange}
                        placeholder="Enter password"
                        className={`${errors.password ? 'border-red-500' : 'border-amber-200'}`}
                        required
                    />
                    {errors.password && <span className="text-xs text-red-500">{errors.password}</span>}
                </div>
                <div className="space-y-1.5">
                    <label className="text-sm font-medium text-amber-900">Confirm Password</label>
                    <Input
                        name="confirmPassword"
                        type="password"
                        value={formData.confirmPassword || ''}
                        onChange={handleChange}
                        placeholder="Confirm password"
                        className={`${errors.confirmPassword ? 'border-red-500' : 'border-amber-200'}`}
                        required
                    />
                    {errors.confirmPassword && <span className="text-xs text-red-500">{errors.confirmPassword}</span>}
                </div>
            </div>
        </FormModal>
    );
}

export default UserCreateModal; 