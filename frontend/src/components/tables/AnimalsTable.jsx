import React, { useState, useEffect } from 'react';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '../ui/table';
import { Input } from '../ui/input';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '../ui/select';
import { Button } from '../ui/button';
import { Pencil, Trash2, Loader2, Map } from 'lucide-react';
import { animalService } from '../../services/animalService';
import { useToast } from '../ui/use-toast';
import AnimalCreateModal from '../modals/AnimalCreateModal';
import AnimalEditModal from '../modals/AnimalEditModal';
import { Pagination } from '../ui/pagination';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const species = [
    { value: 'all', label: 'All species' },
    { value: 'bovine', label: 'Bovine' },
    { value: 'swine', label: 'Swine' },
    { value: 'poultry', label: 'Poultry' },
    { value: 'goat', label: 'Goat' },
    { value: 'sheep', label: 'Sheep' },
];

const statusMap = {
    'healthy': { label: 'Healthy', className: 'text-green-600' },
    'in_treatment': { label: 'In Treatment', className: 'text-yellow-600' },
    'recovering': { label: 'Recovering', className: 'text-blue-600' },
    'sick': { label: 'Sick', className: 'text-red-600' }
};

function AnimalsTable({ farmId }) {
    const navigate = useNavigate();
    const [search, setSearch] = useState('');
    const [animalSpecies, setAnimalSpecies] = useState('all');
    const [animals, setAnimals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [animalToEdit, setAnimalToEdit] = useState(null);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [deletingAnimalId, setDeletingAnimalId] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [isMobile, setIsMobile] = useState(false);
    const { toast } = useToast();
    const itemsPerPage = 10;

    useEffect(() => {
        loadAnimals();
        
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);
        
        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    // Load animals when the farm changes
    useEffect(() => {
        loadAnimals();
    }, [farmId]);

    // Listen for farm change event
    useEffect(() => {
        const handleFarmChange = () => {
            loadAnimals();
        };
        
        window.addEventListener('farmChanged', handleFarmChange);
        return () => window.removeEventListener('farmChanged', handleFarmChange);
    }, []);

    // Reset to first page when filters change
    useEffect(() => {
        setCurrentPage(1);
    }, [search, animalSpecies]);

    const loadAnimals = async () => {
        try {
            const data = await animalService.listAnimals();
            setAnimals(data);
        } catch (error) {
            console.error('Error loading animals:', error);
            toast({
                variant: "destructive",
                title: "Error loading animals",
                description: "Could not load the animal list. Please try again later."
            });
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this animal?')) {
            setDeletingAnimalId(id);
            try {
                await animalService.deleteAnimal(id);
                toast({
                    title: "Success",
                    description: "Animal deleted successfully!",
                    variant: "success"
                });
                loadAnimals();
            } catch (error) {
                console.error('Error deleting animal:', error);
                toast({
                    variant: "destructive",
                    title: "Error deleting",
                    description: "Could not delete the animal. Please try again later."
                });
            } finally {
                setDeletingAnimalId(null);
            }
        }
    };

    const handleEdit = (animal) => {
        setAnimalToEdit(animal);
        setEditModalOpen(true);
    };

    const filteredAnimals = animals.filter(animal =>
        ((animal.identification.toLowerCase().includes(search.toLowerCase()) || 
          animal.name?.toLowerCase().includes(search.toLowerCase()) || 
          animal.id.toString().includes(search))) &&
        (animalSpecies === 'all' || animal.species.toLowerCase() === animalSpecies.toLowerCase())
    );

    // Calculate total pages
    const totalPages = Math.max(1, Math.ceil(filteredAnimals.length / itemsPerPage));
    
    // Get only animals for current page
    const paginatedAnimals = filteredAnimals.slice(
        (currentPage - 1) * itemsPerPage, 
        currentPage * itemsPerPage
    );

    const renderTableRows = () => {
        if (loading) {
            return (
                <TableRow>
                    <TableCell colSpan={isMobile ? 4 : 8} className="h-24 text-center">
                        <div className="flex items-center justify-center">
                            <Loader2 className="h-6 w-6 animate-spin text-amber-700" />
                        </div>
                    </TableCell>
                </TableRow>
            );
        }
        
        if (filteredAnimals.length === 0) {
            return (
                <TableRow>
                    <TableCell colSpan={isMobile ? 4 : 8} className="text-center text-muted-foreground py-8">
                        No animals found.
                    </TableCell>
                </TableRow>
            );
        }
        
        return paginatedAnimals.map(animal => (
            <TableRow key={animal.id} className="hover:bg-amber-50/50">
                {!isMobile && <TableCell>{animal.id}</TableCell>}
                <TableCell className="font-medium">{animal.identification}</TableCell>
                {!isMobile && <TableCell>{animal.name || '-'}</TableCell>}
                <TableCell className="capitalize">{animal.species}</TableCell>
                {!isMobile && <TableCell>{new Date(animal.birthDate).toLocaleDateString()}</TableCell>}
                {!isMobile && <TableCell>{animal.weight}</TableCell>}
                <TableCell>
                    <span className={`font-medium ${statusMap[animal.status]?.className || 'text-gray-600'}`}>
                        {statusMap[animal.status]?.label || animal.status}
                    </span>
                </TableCell>
                <TableCell className="flex gap-2 justify-center">
                    <Button 
                        size="icon" 
                        variant="ghost" 
                        className="text-amber-700 hover:bg-amber-100 hover:text-amber-800 transition-colors"
                        onClick={() => handleEdit(animal)}
                        title="Edit"
                    >
                        <Pencil className="w-4 h-4" />
                    </Button>
                    <Button 
                        size="icon" 
                        variant="ghost" 
                        className="text-red-500 hover:bg-red-50 hover:text-red-600 transition-colors"
                        onClick={() => handleDelete(animal.id)}
                        title="Delete"
                        disabled={deletingAnimalId === animal.id}
                    >
                        {deletingAnimalId === animal.id ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                            <Trash2 className="w-4 h-4" />
                        )}
                    </Button>
                </TableCell>
            </TableRow>
        ));
    };

    return (
        <div className="flex flex-col gap-6 p-4">
            <div className="flex flex-col lg:flex-row gap-3 mb-2 justify-between">
                <div className="flex flex-col md:flex-row gap-3">
                    <Input
                        placeholder="Search by ID, name or tag..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="md:w-64 bg-white"
                    />
                    <Select value={animalSpecies} onValueChange={setAnimalSpecies}>
                        <SelectTrigger className="md:w-48 bg-white">
                            <SelectValue placeholder="Filter by species" />
                        </SelectTrigger>
                        <SelectContent>
                            {species.map((s) => (
                                <SelectItem key={s.value} value={s.value}>
                                    {s.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                
                <div className="flex gap-2">
                    <Button 
                        variant="outline" 
                        className="bg-white hover:bg-amber-50 text-amber-800 border-amber-300"
                        onClick={() => navigate('/animal-map')}
                    >
                        <Map className="w-4 h-4 mr-2" />
                        View Map
                    </Button>
                    <AnimalCreateModal onSuccess={loadAnimals} />
                </div>
            </div>

            <div className="rounded-xl border bg-white shadow-sm overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow className="hover:bg-amber-50">
                            {!isMobile && <TableHead className="w-12">ID</TableHead>}
                            <TableHead>Identification</TableHead>
                            {!isMobile && <TableHead>Name</TableHead>}
                            <TableHead>Species</TableHead>
                            {!isMobile && <TableHead>Birth Date</TableHead>}
                            {!isMobile && <TableHead>Weight (kg)</TableHead>}
                            <TableHead>Status</TableHead>
                            <TableHead className="w-24 text-center">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {renderTableRows()}
                    </TableBody>
                </Table>
            </div>
            
            {/* Pagination */}
            <Pagination 
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
            
            {/* Pagination info */}
            <div className="text-sm text-gray-500 text-center">
                {filteredAnimals.length > 0 ? (
                    <span>
                        Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, filteredAnimals.length)} of {filteredAnimals.length} animals
                    </span>
                ) : null}
            </div>
            
            {/* Edit Modal */}
            {animalToEdit && (
                <AnimalEditModal
                    animal={animalToEdit}
                    open={editModalOpen}
                    onOpenChange={setEditModalOpen}
                    onSuccess={loadAnimals}
                />
            )}
        </div>
    );
}

AnimalsTable.propTypes = {
    farmId: PropTypes.string
};

export default AnimalsTable; 