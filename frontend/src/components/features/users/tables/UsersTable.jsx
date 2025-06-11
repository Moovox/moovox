import { Search, Shield, Tractor, Users } from "lucide-react";
import React, { useEffect, useState } from "react";
import { userService } from "../../../../services/userService";
import FilterSection from "../../../shared/FilterSection";
import PageHeader from "../../../shared/PageHeader";
import PageLayout from "../../../shared/PageLayout";
import PaginationInfo from "../../../shared/PaginationInfo";
import { StatsCard, StatsGrid } from "../../../shared/StatsCard";
import TableContainer from "../../../shared/TableContainer";
import {
  TableEmptyState,
  TableErrorState,
  TableLoadingState,
} from "../../../shared/TableStates";
import { TableHead, TableRow } from "../../../ui/table";
import { useToast } from "../../../ui/use-toast";
import UserCreateModalStandardized from "../modals/UserCreateModalStandardized";
import UserEditModalStandardized from "../modals/UserEditModalStandardized";
import UserTableRow from "./UserTableRow";

const userTypes = [
  { value: "all", label: "All types" },
  { value: "Administrator", label: "Administrator" },
  { value: "Farmer", label: "Farmer" },
  { value: "Farmhand", label: "Employee" },
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

  const totalPages = Math.max(
    1,
    Math.ceil(filteredUsers.length / itemsPerPage),
  );
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

    if (
      !window.confirm(`Are you sure you want to delete the user "${name}"?`)
    ) {
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
        <TableLoadingState
          colSpan={isMobile ? 3 : 5}
          message="Loading users..."
        />
      );
    }

    if (error) {
      return <TableErrorState colSpan={isMobile ? 3 : 5} error={error} />;
    }

    if (filteredUsers.length === 0) {
      return (
        <TableEmptyState
          colSpan={isMobile ? 3 : 5}
          title="No users found"
          description="Try adjusting the filters or adding a new user"
        />
      );
    }

    return paginatedUsers.map((user, index) => (
      <UserTableRow
        key={user.id}
        user={user}
        index={index}
        isMobile={isMobile}
        onEdit={handleEditUser}
        onDelete={handleDelete}
        loadingDelete={loadingDelete}
      />
    ));
  };

  const tableHeaders = (
    <TableRow className="hover:to-gray-150 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100">
      {!isMobile && (
        <TableHead className="font-semibold text-gray-700">ID</TableHead>
      )}
      <TableHead className="font-semibold text-gray-700">Name</TableHead>
      {!isMobile && (
        <TableHead className="font-semibold text-gray-700">Email</TableHead>
      )}
      <TableHead className="font-semibold text-gray-700">Type</TableHead>
      <TableHead className="text-center font-semibold text-gray-700">
        Actions
      </TableHead>
    </TableRow>
  );

  return (
    <PageLayout>
      <PageHeader
        icon={<Users />}
        title="User Management"
        description="Manage all system users"
      />

      <FilterSection
        search={search}
        onSearchChange={setSearch}
        searchPlaceholder="Search by name, email or ID..."
        filterValue={userType}
        onFilterChange={setUserType}
        filterOptions={userTypes}
        filterPlaceholder="Filter by type"
        actions={<UserCreateModalStandardized onSuccess={onUserCreated} />}
      />

      <StatsGrid columns={4}>
        <StatsCard
          title="Total Users"
          value={users?.length || 0}
          icon={<Users />}
          bgColor="bg-blue-100"
          iconColor="text-blue-600"
        />
        <StatsCard
          title="Filtered"
          value={filteredUsers.length}
          icon={<Search />}
          bgColor="bg-green-100"
          iconColor="text-green-600"
        />
        <StatsCard
          title="Administrators"
          value={users?.filter((u) => u.type === "Administrator").length || 0}
          icon={<Shield />}
          bgColor="bg-purple-100"
          iconColor="text-purple-600"
        />
        <StatsCard
          title="Farmers"
          value={users?.filter((u) => u.type === "Farmer").length || 0}
          icon={<Tractor />}
          bgColor="bg-green-100"
          iconColor="text-green-600"
        />
      </StatsGrid>

      <TableContainer headers={tableHeaders} body={renderTableContent()} />

      <PaginationInfo
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        itemsPerPage={itemsPerPage}
        totalItems={filteredUsers.length}
        itemName="users"
      />

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
    </PageLayout>
  );
}

export default UsersTable;
