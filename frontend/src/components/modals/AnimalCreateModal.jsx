import React, { useState, useEffect } from 'react';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import FormModal from '../ui/form-modal';
import { animalService } from '../../services/animalService';
import { useToast } from '../ui/use-toast';
import { Button } from '../ui/button';
import { Plus } from 'lucide-react';
import PropTypes from 'prop-types';

const statusOptions = [
    { value: 'healthy', label: 'Healthy' },
    { value: 'in_treatment', label: 'In Treatment' },
    { value: 'recovering', label: 'Recovering' },
    { value: 'sick', label: 'Sick' }
];

function AnimalCreateModal({ onSuccess }) {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [species, setSpecies] = useState([]);
    const [breeds, setBreeds] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        speciesId: '',
        breedId: '',
        birthDate: '',
        weight: '',
        status: 'healthy'
    });
    const [errors, setErrors] = useState({});
    const { toast } = useToast();

    useEffect(() => {
        // Load species when the component mounts
        setSpecies(animalService.getSpecies());
    }, []);

    useEffect(() => {
        // Load breeds when species changes
        if (formData.speciesId) {
            setBreeds(animalService.getBreedsBySpecies(parseInt(formData.speciesId)));
            // Reset breed if species changes
            setFormData(prev => ({ ...prev, breedId: '' }));
        } else {
            setBreeds([]);
        }
    }, [formData.speciesId]);

    const validateForm = () => {
        const newErrors = {};

        if (!formData.speciesId) {
            newErrors.speciesId = 'Species is required';
        }

        if (!formData.breedId) {
            newErrors.breedId = 'Breed is required';
        }

        if (!formData.birthDate) {
            newErrors.birthDate = 'Birth date is required';
        } else {
            const today = new Date();
            const birthDate = new Date(formData.birthDate);
            
            if (birthDate > today) {
                newErrors.birthDate = 'Birth date cannot be in the future';
            }
        }

        if (!formData.weight) {
            newErrors.weight = 'Weight is required';
        } else if (isNaN(parseFloat(formData.weight)) || parseFloat(formData.weight) <= 0) {
            newErrors.weight = 'Weight must be a positive number';
        }

        if (!formData.status) {
            newErrors.status = 'Status is required';
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
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSelectChange = (name, value) => {
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const resetForm = () => {
        setFormData({
            name: '',
            speciesId: '',
            breedId: '',
            birthDate: '',
            weight: '',
            status: 'healthy'
        });
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
            await animalService.createAnimal(formData);
            
            toast({
                title: "Success",
                description: "Animal created successfully!",
                variant: "success"
            });
            
            handleOpenChange(false);
            if (onSuccess) {
                await onSuccess();
            }
        } catch (error) {
            console.error('Error creating animal:', error);
            
            toast({
                title: "Error creating animal",
                description: error.message || 'An error occurred while creating the animal',
                variant: "destructive"
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <FormModal
            title="Add New Animal"
            open={open}
            onOpenChange={handleOpenChange}
            onSubmit={handleSubmit}
            loading={loading}
            submitText="Create"
            cancelText="Cancel"
            triggerElement={
                <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                    <Plus className="w-4 h-4 mr-1" />
                    Add Animal
                </Button>
            }
        >
            <div className="flex flex-col gap-4">
                <div className="space-y-1.5">
                    <label className="text-sm font-medium text-amber-900">Name (Optional)</label>
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
                        onValueChange={(value) => handleSelectChange('speciesId', value)}
                        required
                    >
                        <SelectTrigger className={`${errors.speciesId ? 'border-red-500' : 'border-amber-200'}`}>
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
                    {errors.speciesId && <span className="text-xs text-red-500">{errors.speciesId}</span>}
                </div>
                <div className="space-y-1.5">
                    <label className="text-sm font-medium text-amber-900">Breed</label>
                    <Select
                        value={formData.breedId}
                        onValueChange={(value) => handleSelectChange('breedId', value)}
                        disabled={!formData.speciesId}
                        required
                    >
                        <SelectTrigger className={`${errors.breedId ? 'border-red-500' : 'border-amber-200'}`}>
                            <SelectValue placeholder={formData.speciesId ? "Select breed" : "Select species first"} />
                        </SelectTrigger>
                        <SelectContent>
                            {breeds.map((item) => (
                                <SelectItem key={item.id} value={item.id.toString()}>
                                    {item.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    {errors.breedId && <span className="text-xs text-red-500">{errors.breedId}</span>}
                </div>
                <div className="space-y-1.5">
                    <label className="text-sm font-medium text-amber-900">Birth Date</label>
                    <Input
                        name="birthDate"
                        type="date"
                        value={formData.birthDate}
                        onChange={handleChange}
                        max={new Date().toISOString().split('T')[0]}
                        className={`${errors.birthDate ? 'border-red-500' : 'border-amber-200'}`}
                        required
                    />
                    {errors.birthDate && <span className="text-xs text-red-500">{errors.birthDate}</span>}
                </div>
                <div className="space-y-1.5">
                    <label className="text-sm font-medium text-amber-900">Weight (kg)</label>
                    <Input
                        name="weight"
                        type="number"
                        min="0"
                        step="0.1"
                        value={formData.weight}
                        onChange={handleChange}
                        placeholder="Enter weight in kg"
                        className={`${errors.weight ? 'border-red-500' : 'border-amber-200'}`}
                        required
                    />
                    {errors.weight && <span className="text-xs text-red-500">{errors.weight}</span>}
                </div>
                <div className="space-y-1.5">
                    <label className="text-sm font-medium text-amber-900">Health Status</label>
                    <Select
                        value={formData.status}
                        onValueChange={(value) => handleSelectChange('status', value)}
                        required
                    >
                        <SelectTrigger className={`${errors.status ? 'border-red-500' : 'border-amber-200'}`}>
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
                    {errors.status && <span className="text-xs text-red-500">{errors.status}</span>}
                </div>
            </div>
        </FormModal>
    );
}

AnimalCreateModal.propTypes = {
    onSuccess: PropTypes.func
};

export default AnimalCreateModal; 