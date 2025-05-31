import React, { useState } from 'react';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import FormModal from '../ui/form-modal';
import { vaccineService } from '../../services/vaccineService';
import { useToast } from '../ui/use-toast';
import { Button } from '../ui/button';
import { Plus } from 'lucide-react';
import PropTypes from 'prop-types';

function VaccineCreateModal({ onSuccess }) {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        manufacturer: '',
        batchNumber: '',
        expirationDate: '',
        dosage: '',
        description: ''
    });
    const [errors, setErrors] = useState({});
    const { toast } = useToast();

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name?.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.manufacturer?.trim()) {
            newErrors.manufacturer = 'Manufacturer is required';
        }

        if (!formData.batchNumber?.trim()) {
            newErrors.batchNumber = 'Batch number is required';
        }

        if (!formData.expirationDate) {
            newErrors.expirationDate = 'Expiration date is required';
        } else {
            const expirationDate = new Date(formData.expirationDate);
            const today = new Date();
            
            if (expirationDate < today) {
                newErrors.expirationDate = 'Expiration date cannot be in the past';
            }
        }

        if (!formData.dosage?.trim()) {
            newErrors.dosage = 'Dosage is required';
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

    const resetForm = () => {
        setFormData({
            name: '',
            manufacturer: '',
            batchNumber: '',
            expirationDate: '',
            dosage: '',
            description: ''
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
            await vaccineService.createVaccine(formData);
            
            toast({
                title: "Success",
                description: "Vaccine created successfully!",
                variant: "success"
            });
            
            handleOpenChange(false);
            if (onSuccess) {
                await onSuccess();
            }
        } catch (error) {
            console.error('Error creating vaccine:', error);
            
            toast({
                title: "Error creating vaccine",
                description: error.message || 'An error occurred while creating the vaccine',
                variant: "destructive"
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <FormModal
            title="Add New Vaccine"
            open={open}
            onOpenChange={handleOpenChange}
            onSubmit={handleSubmit}
            loading={loading}
            submitText="Create"
            cancelText="Cancel"
            triggerElement={
                <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                    <Plus className="w-4 h-4 mr-1" />
                    Add Vaccine
                </Button>
            }
        >
            <div className="flex flex-col gap-4">
                <div className="space-y-1.5">
                    <label className="text-sm font-medium text-amber-900">Name</label>
                    <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter vaccine name"
                        className={`${errors.name ? 'border-red-500' : 'border-amber-200'}`}
                        required
                    />
                    {errors.name && <span className="text-xs text-red-500">{errors.name}</span>}
                </div>
                <div className="space-y-1.5">
                    <label className="text-sm font-medium text-amber-900">Manufacturer</label>
                    <Input
                        name="manufacturer"
                        value={formData.manufacturer}
                        onChange={handleChange}
                        placeholder="Enter manufacturer name"
                        className={`${errors.manufacturer ? 'border-red-500' : 'border-amber-200'}`}
                        required
                    />
                    {errors.manufacturer && <span className="text-xs text-red-500">{errors.manufacturer}</span>}
                </div>
                <div className="space-y-1.5">
                    <label className="text-sm font-medium text-amber-900">Batch Number</label>
                    <Input
                        name="batchNumber"
                        value={formData.batchNumber}
                        onChange={handleChange}
                        placeholder="Enter batch number"
                        className={`${errors.batchNumber ? 'border-red-500' : 'border-amber-200'}`}
                        required
                    />
                    {errors.batchNumber && <span className="text-xs text-red-500">{errors.batchNumber}</span>}
                </div>
                <div className="space-y-1.5">
                    <label className="text-sm font-medium text-amber-900">Expiration Date</label>
                    <Input
                        name="expirationDate"
                        type="date"
                        value={formData.expirationDate}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        className={`${errors.expirationDate ? 'border-red-500' : 'border-amber-200'}`}
                        required
                    />
                    {errors.expirationDate && <span className="text-xs text-red-500">{errors.expirationDate}</span>}
                </div>
                <div className="space-y-1.5">
                    <label className="text-sm font-medium text-amber-900">Dosage</label>
                    <Input
                        name="dosage"
                        value={formData.dosage}
                        onChange={handleChange}
                        placeholder="e.g., '5 mL' or '10 mg'"
                        className={`${errors.dosage ? 'border-red-500' : 'border-amber-200'}`}
                        required
                    />
                    {errors.dosage && <span className="text-xs text-red-500">{errors.dosage}</span>}
                </div>
                <div className="space-y-1.5">
                    <label className="text-sm font-medium text-amber-900">Description (Optional)</label>
                    <Textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Enter additional details about the vaccine"
                        className="border-amber-200 resize-none"
                        rows={3}
                    />
                </div>
            </div>
        </FormModal>
    );
}

VaccineCreateModal.propTypes = {
    onSuccess: PropTypes.func
};

export default VaccineCreateModal; 