import React, { useState, useEffect } from 'react';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import FormModal from '../ui/form-modal';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { applicationService } from '../../services/applicationService';
import { animalService } from '../../services/animalService';
import { vaccineService } from '../../services/vaccineService';
import { useToast } from '../ui/use-toast';
import { Button } from '../ui/button';
import { Plus } from 'lucide-react';
import PropTypes from 'prop-types';

function ApplicationCreateModal({ onSuccess }) {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [animals, setAnimals] = useState([]);
    const [vaccines, setVaccines] = useState([]);
    const [loadingResources, setLoadingResources] = useState(false);
    const [resourceError, setResourceError] = useState(null);
    
    const [formData, setFormData] = useState({
        animalId: '',
        vaccineId: '',
        date: new Date().toISOString().split('T')[0],
        dosage: '',
        appliedBy: '',
        notes: ''
    });
    const [errors, setErrors] = useState({});
    const { toast } = useToast();

    // Load animals and vaccines when modal opens
    useEffect(() => {
        const loadResources = async () => {
            if (!open) return;
            
            setLoadingResources(true);
            setResourceError(null);
            
            try {
                // Load animals and vaccines in parallel
                const [animalsList, vaccinesList] = await Promise.all([
                    animalService.listAnimals(),
                    vaccineService.getAllVaccines()
                ]);
                
                setAnimals(animalsList || []);
                setVaccines(vaccinesList.data || []);
            } catch (error) {
                console.error('Error loading resources:', error);
                setResourceError(error.message || 'Failed to load animals and vaccines');
                toast({
                    title: "Error",
                    description: "Failed to load animals and vaccines. Please try again.",
                    variant: "destructive"
                });
            } finally {
                setLoadingResources(false);
            }
        };
        
        loadResources();
    }, [open, toast]);

    const validateForm = () => {
        const newErrors = {};

        if (!formData.animalId) {
            newErrors.animalId = 'Animal is required';
        }

        if (!formData.vaccineId) {
            newErrors.vaccineId = 'Vaccine is required';
        }

        if (!formData.date) {
            newErrors.date = 'Application date is required';
        }

        if (!formData.dosage?.trim()) {
            newErrors.dosage = 'Dosage is required';
        }

        if (!formData.appliedBy?.trim()) {
            newErrors.appliedBy = 'Applied by is required';
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
            animalId: '',
            vaccineId: '',
            date: new Date().toISOString().split('T')[0],
            dosage: '',
            appliedBy: '',
            notes: ''
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
            await applicationService.createApplication(formData);
            
            toast({
                title: "Success",
                description: "Application created successfully!",
                variant: "success"
            });
            
            handleOpenChange(false);
            if (onSuccess) {
                await onSuccess();
            }
        } catch (error) {
            console.error('Error creating application:', error);
            
            toast({
                title: "Error creating application",
                description: error.message || 'An error occurred while creating the application',
                variant: "destructive"
            });
        } finally {
            setLoading(false);
        }
    };

    // Get vaccine suggested dosage when selecting a vaccine
    useEffect(() => {
        if (formData.vaccineId) {
            const selectedVaccine = vaccines.find(v => v.id.toString() === formData.vaccineId.toString());
            if (selectedVaccine && selectedVaccine.dosage) {
                setFormData(prev => ({
                    ...prev,
                    dosage: selectedVaccine.dosage
                }));
            }
        }
    }, [formData.vaccineId, vaccines]);

    return (
        <FormModal
            title="New Vaccine Application"
            open={open}
            onOpenChange={handleOpenChange}
            onSubmit={handleSubmit}
            loading={loading}
            submitText="Create"
            cancelText="Cancel"
            triggerElement={
                <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                    <Plus className="w-4 h-4 mr-1" />
                    Add Application
                </Button>
            }
        >
            {resourceError && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md text-red-600 text-sm">
                    {resourceError}
                </div>
            )}
            
            <div className="flex flex-col gap-4">
                <div className="space-y-1.5">
                    <label className="text-sm font-medium text-amber-900">Animal</label>
                    <Select
                        name="animalId"
                        value={formData.animalId}
                        onValueChange={(value) => handleSelectChange('animalId', value)}
                        disabled={loadingResources || animals.length === 0}
                    >
                        <SelectTrigger className={`${errors.animalId ? 'border-red-500' : 'border-amber-200'}`}>
                            <SelectValue placeholder="Select an animal" />
                        </SelectTrigger>
                        <SelectContent>
                            {animals.map((animal) => (
                                <SelectItem key={animal.id} value={animal.id.toString()}>
                                    {animal.name || animal.identification || `Animal #${animal.id}`}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    {errors.animalId && <span className="text-xs text-red-500">{errors.animalId}</span>}
                </div>
                
                <div className="space-y-1.5">
                    <label className="text-sm font-medium text-amber-900">Vaccine</label>
                    <Select
                        name="vaccineId"
                        value={formData.vaccineId}
                        onValueChange={(value) => handleSelectChange('vaccineId', value)}
                        disabled={loadingResources || vaccines.length === 0}
                    >
                        <SelectTrigger className={`${errors.vaccineId ? 'border-red-500' : 'border-amber-200'}`}>
                            <SelectValue placeholder="Select a vaccine" />
                        </SelectTrigger>
                        <SelectContent>
                            {vaccines.map((vaccine) => (
                                <SelectItem key={vaccine.id} value={vaccine.id.toString()}>
                                    {vaccine.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    {errors.vaccineId && <span className="text-xs text-red-500">{errors.vaccineId}</span>}
                </div>
                
                <div className="space-y-1.5">
                    <label className="text-sm font-medium text-amber-900">Application Date</label>
                    <Input
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleChange}
                        className={`${errors.date ? 'border-red-500' : 'border-amber-200'}`}
                        required
                    />
                    {errors.date && <span className="text-xs text-red-500">{errors.date}</span>}
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
                    <label className="text-sm font-medium text-amber-900">Applied By</label>
                    <Input
                        name="appliedBy"
                        value={formData.appliedBy}
                        onChange={handleChange}
                        placeholder="Name of the person who applied the vaccine"
                        className={`${errors.appliedBy ? 'border-red-500' : 'border-amber-200'}`}
                        required
                    />
                    {errors.appliedBy && <span className="text-xs text-red-500">{errors.appliedBy}</span>}
                </div>
                
                <div className="space-y-1.5">
                    <label className="text-sm font-medium text-amber-900">Notes (Optional)</label>
                    <Textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        placeholder="Enter additional notes about the application"
                        className="border-amber-200 resize-none"
                        rows={3}
                    />
                </div>
            </div>
        </FormModal>
    );
}

ApplicationCreateModal.propTypes = {
    onSuccess: PropTypes.func
};

export default ApplicationCreateModal; 