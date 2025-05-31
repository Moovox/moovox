import React, { useState, useEffect } from 'react';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '../ui/table';
import { Input } from '../ui/input';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '../ui/select';
import { Button } from '../ui/button';
import { Pencil, Trash2, Loader2, AlertCircle } from 'lucide-react';
import UserCreateModal from '../modals/UserCreateModal';
import UserEditModal from '../modals/UserEditModal';
import { userService } from '../../services/userService';
import { useToast } from '../ui/use-toast';
import { Alert, AlertDescription } from '../ui/alert';
import { Pagination } from '../ui/pagination';

const userTypes = [
    { value: 'all', label: 'All types' },
    { value: 'Administrator', label: 'Administrator' },
    { value: 'Farmer', label: 'Farmer' },
    { value: 'Farmhand', label: 'Farmhand' },
    { value: 'Veterinarian', label: 'Veterinarian' },
];

function UsersTable({ users, loading, onUserCreated, error }) {
    const [search, setSearch] = useState('');
    const [userType, setUserType] = useState('all');
    const [loadingDelete, setLoadingDelete] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [isMobile, setIsMobile] = useState(false);
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
    }, [search, userType]);

    const filteredUsers = users?.filter(user =>
        ((user?.name?.toLowerCase().includes(search.toLowerCase()) || 
          user?.email?.toLowerCase().includes(search.toLowerCase()) || 
          user?.id?.toString().includes(search))) &&
        (userType === 'all' || user?.type === userType)
    ) || [];

    // Calculate total pages
    const totalPages = Math.max(1, Math.ceil(filteredUsers.length / itemsPerPage));
    
    // Get only users for current page
    const paginatedUsers = filteredUsers.slice(
        (currentPage - 1) * itemsPerPage, 
        currentPage * itemsPerPage
    );

    const handleDelete = async (id, name) => {
        if (!id) {
            toast({
                title: "Error",
                description: "Invalid user ID.",
                variant: "destructive"
            });
            return;
        }

        if (!window.confirm(`Are you sure you want to delete user "${name}"?`)) {
            return;
        }

        setLoadingDelete(id);
        try {
            await userService.deleteUser(id);
            toast({
                title: "Success",
                description: "User deleted successfully!",
                variant: "success"
            });
            
            if (onUserCreated) {
                await onUserCreated();
            }
        } catch (error) {
            console.error('Error deleting user:', error);
            toast({
                title: "Error deleting user",
                description: error.message || 'An error occurred while deleting the user',
                variant: "destructive"
            });
        } finally {
            setLoadingDelete(null);
        }
    };

    const renderTableContent = () => {
        if (loading) {
            return (
                <TableRow>
                    <TableCell colSpan={isMobile ? 3 : 5} className="h-24 text-center">
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
                    <TableCell colSpan={isMobile ? 3 : 5} className="h-24">
                        <Alert variant="destructive" className="flex items-center gap-2">
                            <AlertCircle className="h-4 w-4" />
                            <AlertDescription>
                                {error.message || 'Error loading users. Please try again.'}
                            </AlertDescription>
                        </Alert>
                    </TableCell>
                </TableRow>
            );
        }

        if (filteredUsers.length === 0) {
            return (
                <TableRow>
                    <TableCell colSpan={isMobile ? 3 : 5} className="text-center text-muted-foreground py-8">
                        No users found.
                    </TableCell>
                </TableRow>
            );
        }

        return paginatedUsers.map((user) => (
            <TableRow key={user.id}>
                {!isMobile && <TableCell>{user.id}</TableCell>}
                <TableCell>{user.name}</TableCell>
                {!isMobile && <TableCell>{user.email}</TableCell>}
                <TableCell>{user.type}</TableCell>
                <TableCell>
                    <div className="flex justify-center gap-2">
                        <UserEditModal
                            user={user}
                            onSuccess={onUserCreated}
                        />
                        <Button 
                            size="icon" 
                            variant="ghost" 
                            className="text-red-500 hover:bg-red-50 hover:text-red-600 transition-colors"
                            title="Delete"
                            onClick={() => handleDelete(user.id, user.name)}
                            disabled={loadingDelete === user.id}
                        >
                            {loadingDelete === user.id ? (
                                <Loader2 className="h-4 w-4 animate-spin" />
                            ) : (
                                <Trash2 className="w-4 h-4" />
                            )}
                        </Button>
                    </div>
                </TableCell>
            </TableRow>
        ));
    };

    return (
        <div className="flex flex-col gap-6 p-4">
            <div className="flex flex-col md:flex-row gap-3 mb-2 justify-between">
                <div className="flex flex-col md:flex-row gap-3">
                    <Input
                        placeholder="Search by name, email or ID..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="md:w-64 bg-white"
                    />
                    <Select value={userType} onValueChange={setUserType}>
                        <SelectTrigger className="md:w-48 bg-white">
                            <SelectValue placeholder="Filter by type" />
                        </SelectTrigger>
                        <SelectContent>
                            {userTypes.map((type) => (
                                <SelectItem key={type.value} value={type.value}>
                                    {type.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <UserCreateModal onSuccess={onUserCreated} />
            </div>

            <div className="rounded-xl border bg-white shadow-sm overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow className="hover:bg-amber-50">
                            {!isMobile && <TableHead className="w-12">ID</TableHead>}
                            <TableHead>Name</TableHead>
                            {!isMobile && <TableHead>Email</TableHead>}
                            <TableHead>Type</TableHead>
                            <TableHead className="w-28 text-center">Actions</TableHead>
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
                {filteredUsers.length > 0 ? (
                    <span>
                        Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, filteredUsers.length)} of {filteredUsers.length} users
                    </span>
                ) : null}
            </div>
        </div>
    );
}

export default UsersTable; 