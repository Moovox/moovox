import { AlertCircle, Edit, Loader2, Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { userService } from "../../../../services/userService";
import { Alert, AlertDescription } from "../../../ui/alert";
import { Button } from "../../../ui/button";
import { Input } from "../../../ui/input";
import { Pagination } from "../../../ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../ui/table";
import { useToast } from "../../../ui/use-toast";
import UserCreateModalStandardized from "../modals/UserCreateModalStandardized";
import UserEditModalStandardized from "../modals/UserEditModalStandardized";

const userTypes = [
  { value: "all", label: "All types" },
  { value: "Administrator", label: "Administrator" },
  { value: "Farmer", label: "Farmer" },
  { value: "Farmhand", label: "Farmhand" },
  { value: "Veterinarian", label: "Veterinarian" },
];

function UsersTable({ users, loading, onUserCreated, error }) {
  const [search, setSearch] = useState("");
  const [userType, setUserType] = useState("all");
  const [loadingDelete, setLoadingDelete] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const { toast } = useToast();
  const itemsPerPage = 10;

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [search, userType]);

  const filteredUsers =
    users?.filter(
      (user) =>
        (user?.name?.toLowerCase().includes(search.toLowerCase()) ||
          user?.email?.toLowerCase().includes(search.toLowerCase()) ||
          user?.id?.toString().includes(search)) &&
        (userType === "all" || user?.type === userType),
    ) || [];

  // Calculate total pages
  const totalPages = Math.max(
    1,
    Math.ceil(filteredUsers.length / itemsPerPage),
  );

  // Get only users for current page
  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handleDelete = async (id, name) => {
    if (!id) {
      toast({
        title: "Error",
        description: "Invalid user ID.",
        variant: "destructive",
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
        variant: "success",
      });

      if (onUserCreated) {
        await onUserCreated();
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      toast({
        title: "Error deleting user",
        description:
          error.message || "An error occurred while deleting the user",
        variant: "destructive",
      });
    } finally {
      setLoadingDelete(null);
    }
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
    setEditModalOpen(true);
  };

  const handleEditModalClose = () => {
    setEditModalOpen(false);
    setEditingUser(null);
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
                {error.message || "Error loading users. Please try again."}
              </AlertDescription>
            </Alert>
          </TableCell>
        </TableRow>
      );
    }

    if (filteredUsers.length === 0) {
      return (
        <TableRow>
          <TableCell
            colSpan={isMobile ? 3 : 5}
            className="text-muted-foreground py-8 text-center"
          >
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
            <Button
              size="icon"
              variant="ghost"
              className="text-blue-500 transition-colors hover:bg-blue-50 hover:text-blue-600"
              title="Editar"
              onClick={() => handleEditUser(user)}
            >
              <Edit className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="text-red-500 transition-colors hover:bg-red-50 hover:text-red-600"
              title="Delete"
              onClick={() => handleDelete(user.id, user.name)}
              disabled={loadingDelete === user.id}
            >
              {loadingDelete === user.id ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Trash2 className="h-4 w-4" />
              )}
            </Button>
          </div>
        </TableCell>
      </TableRow>
    ));
  };

  return (
    <div className="flex flex-col gap-6 p-4">
      <div className="mb-2 flex flex-col justify-between gap-3 md:flex-row">
        <div className="flex flex-col gap-3 md:flex-row">
          <Input
            placeholder="Search by name, email or ID..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-white md:w-64"
          />
          <Select value={userType} onValueChange={setUserType}>
            <SelectTrigger className="bg-white md:w-48">
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
        <UserCreateModalStandardized onSuccess={onUserCreated} />
      </div>

      <div className="overflow-x-auto rounded-xl border bg-white shadow-sm">
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
          <TableBody>{renderTableContent()}</TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      {/* Show pagination information */}
      <div className="text-center text-sm text-gray-500">
        {filteredUsers.length > 0 ? (
          <span>
            Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
            {Math.min(currentPage * itemsPerPage, filteredUsers.length)} of{" "}
            {filteredUsers.length} users
          </span>
        ) : null}
      </div>

      {/* Edit Modal */}
      {editingUser && (
        <UserEditModalStandardized
          user={editingUser}
          open={editModalOpen}
          onOpenChange={setEditModalOpen}
          onSuccess={async () => {
            handleEditModalClose();
            if (onUserCreated) {
              await onUserCreated();
            }
          }}
        />
      )}
    </div>
  );
}

export default UsersTable;
