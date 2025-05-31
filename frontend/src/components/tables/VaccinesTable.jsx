import React, { useState, useEffect } from 'react';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '../ui/table';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Pencil, Trash2, Loader2 } from 'lucide-react';
import { vaccineService } from '../../services/vaccineService';
import { useToast } from '../ui/use-toast';
import VaccineCreateModal from '../modals/VaccineCreateModal';
import VaccineEditModal from '../modals/VaccineEditModal';
import { Pagination } from '../ui/pagination';
import { Alert, AlertDescription } from '../ui/alert';
import { AlertCircle } from 'lucide-react';
import PropTypes from 'prop-types';

function VaccinesTable({ vaccines, loading, error, onVaccineCreated }) {
    const [search, setSearch] = useState('');
    const [loadingDelete, setLoadingDelete] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [isMobile, setIsMobile] = useState(false);
    const [vaccineToEdit, setVaccineToEdit] = useState(null);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const { toast } = useToast();
    const itemsPerPage = 10;

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);
        
        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    // Reset to first page when filters change
    useEffect(() => {
        setCurrentPage(1);
    }, [search]);

    const filteredVaccines = vaccines?.filter(vaccine =>
        (vaccine?.name?.toLowerCase().includes(search.toLowerCase()) || 
         vaccine?.manufacturer?.toLowerCase().includes(search.toLowerCase()) || 
         vaccine?.id?.toString().includes(search))
    ) || [];

    // Calculate total pages
    const totalPages = Math.max(1, Math.ceil(filteredVaccines.length / itemsPerPage));
    
    // Get only vaccines for current page
    const paginatedVaccines = filteredVaccines.slice(
        (currentPage - 1) * itemsPerPage, 
        currentPage * itemsPerPage
    );

    const handleDelete = async (id, name) => {
        if (!id) {
            toast({
                title: "Error",
                description: "Invalid vaccine ID.",
                variant: "destructive"
            });
            return;
        }

        if (!window.confirm(`Are you sure you want to delete vaccine "${name}"?`)) {
            return;
        }

        setLoadingDelete(id);
        try {
            await vaccineService.deleteVaccine(id);
            toast({
                title: "Success",
                description: "Vaccine deleted successfully!",
                variant: "success"
            });
            
            if (onVaccineCreated) {
                await onVaccineCreated();
            }
        } catch (error) {
            console.error('Error deleting vaccine:', error);
            toast({
                title: "Error deleting vaccine",
                description: error.message || 'An error occurred while deleting the vaccine',
                variant: "destructive"
            });
        } finally {
            setLoadingDelete(null);
        }
    };

    const handleEdit = (vaccine) => {
        setVaccineToEdit(vaccine);
        setEditModalOpen(true);
    };

    const renderTableContent = () => {
        if (loading) {
            return (
                <TableRow>
                    <TableCell colSpan={isMobile ? 3 : 6} className="h-24 text-center">
                        <div className="flex items-center justify-center">
                            <Loader2 className="h-6 w-6 animate-spin text-amber-700" />
                        </div>
                    </TableCell>
                </TableRow>
            );
        }

        if (error) {
            return (
                <TableRow>
                    <TableCell colSpan={isMobile ? 3 : 6} className="h-24">
                        <Alert variant="destructive" className="flex items-center gap-2">
                            <AlertCircle className="h-4 w-4" />
                            <AlertDescription>
                                {error.message || 'Error loading vaccines. Please try again.'}
                            </AlertDescription>
                        </Alert>
                    </TableCell>
                </TableRow>
            );
        }

        if (filteredVaccines.length === 0) {
            return (
                <TableRow>
                    <TableCell colSpan={isMobile ? 3 : 6} className="text-center text-muted-foreground py-8">
                        No vaccines found.
                    </TableCell>
                </TableRow>
            );
        }

        return paginatedVaccines.map((vaccine) => {
            const expirationDate = vaccine.expirationDate ? new Date(vaccine.expirationDate) : null;
            const isExpired = expirationDate && expirationDate < new Date();

            return (
                <TableRow key={vaccine.id} className={isExpired ? "bg-red-50" : ""}>
                    {!isMobile && <TableCell>{vaccine.id}</TableCell>}
                    <TableCell className="font-medium">{vaccine.name}</TableCell>
                    <TableCell>{vaccine.manufacturer}</TableCell>
                    {!isMobile && <TableCell>{vaccine.batchNumber}</TableCell>}
                    {!isMobile && 
                        <TableCell className={isExpired ? "text-red-600 font-medium" : ""}>
                            {expirationDate ? expirationDate.toLocaleDateString() : '-'}
                        </TableCell>
                    }
                    <TableCell>
                        <div className="flex justify-center gap-2">
                            <Button 
                                size="icon" 
                                variant="ghost" 
                                className="text-amber-700 hover:bg-amber-100 hover:text-amber-800 transition-colors"
                                title="Edit"
                                onClick={() => handleEdit(vaccine)}
                            >
                                <Pencil className="w-4 h-4" />
                            </Button>
                            <Button 
                                size="icon" 
                                variant="ghost" 
                                className="text-red-500 hover:bg-red-50 hover:text-red-600 transition-colors"
                                title="Delete"
                                onClick={() => handleDelete(vaccine.id, vaccine.name)}
                                disabled={loadingDelete === vaccine.id}
                            >
                                {loadingDelete === vaccine.id ? (
                                    <Loader2 className="h-4 w-4 animate-spin" />
                                ) : (
                                    <Trash2 className="w-4 h-4" />
                                )}
                            </Button>
                        </div>
                    </TableCell>
                </TableRow>
            );
        });
    };

    return (
        <div className="flex flex-col gap-6 p-4">
            <div className="flex flex-col md:flex-row gap-3 mb-2 justify-between">
                <Input
                    placeholder="Search by name, manufacturer or ID..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="md:w-64 bg-white"
                />
                <VaccineCreateModal onSuccess={onVaccineCreated} />
            </div>

            <div className="rounded-xl border bg-white shadow-sm overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow className="hover:bg-amber-50">
                            {!isMobile && <TableHead className="w-12">ID</TableHead>}
                            <TableHead>Name</TableHead>
                            <TableHead>Manufacturer</TableHead>
                            {!isMobile && <TableHead>Batch Number</TableHead>}
                            {!isMobile && <TableHead>Expiration Date</TableHead>}
                            <TableHead className="w-24 text-center">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {renderTableContent()}
                    </TableBody>
                </Table>
            </div>
            
            {/* Pagination */}
            <Pagination 
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
            
            {/* Show pagination information */}
            <div className="text-sm text-gray-500 text-center">
                {filteredVaccines.length > 0 ? (
                    <span>
                        Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, filteredVaccines.length)} of {filteredVaccines.length} vaccines
                    </span>
                ) : null}
            </div>

            {/* Edit Modal */}
            {vaccineToEdit && (
                <VaccineEditModal
                    vaccine={vaccineToEdit}
                    open={editModalOpen}
                    onOpenChange={setEditModalOpen}
                    onSuccess={onVaccineCreated}
                />
            )}
        </div>
    );
}

VaccinesTable.propTypes = {
    vaccines: PropTypes.array,
    loading: PropTypes.bool,
    error: PropTypes.object,
    onVaccineCreated: PropTypes.func
};

export default VaccinesTable; 