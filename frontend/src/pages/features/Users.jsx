import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import UsersTable from "../../components/features/users/tables/UsersTable";
import MainLayout from "../../components/layout/MainLayout";
import { useToast } from "../../components/ui/use-toast";
import { useFarm } from "../../context/FarmContext";
import { userService } from "../../services/userService";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { toast } = useToast();
  const { currentFarmId } = useFarm();

  const loadUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await userService.getAllUsers();

      // If there's an error in the result, handle it here
      if (result.error) {
        throw result.error;
      }

      // Ensure we have an array, even if empty
      setUsers(result.data || []);
    } catch (error) {
      console.error("Error loading users:", error);
      setError(error);

      // Only show toast for real errors, not for empty lists
      if (
        error.message &&
        !error.message.includes("No") &&
        !error.message.includes("not found")
      ) {
        let message = "Could not load the list of users.";

        if (error.response?.status === 401) {
          message = "Session expired. Please login again.";
        } else if (error.message) {
          message = error.message;
        }

        toast({
          variant: "destructive",
          title: "Error",
          description: message,
        });
      }

      // If there's an error, ensure the list is initialized as empty
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  // Load users when the farm changes
  useEffect(() => {
    const handleFarmChange = () => {
      loadUsers();
    };

    // Listen for the custom farm change event
    window.addEventListener("farmChanged", handleFarmChange);

    // Clean up the listener when the component unmounts
    return () => window.removeEventListener("farmChanged", handleFarmChange);
  }, []);

  // Load users when the component mounts or when the farm changes
  useEffect(() => {
    loadUsers();
  }, [currentFarmId]);

  const handleUserCreated = () => {
    loadUsers();
  };

  return (
    <>
      <Helmet>
        <title>Moovox | Users</title>
        <meta name="description" content="User Management" />
      </Helmet>
      <MainLayout
        title="Users"
        className="min-h-screen bg-gradient-to-br from-[#fff8f0] via-[#f9e7c2] to-[#bfa77a]"
      >
        <div className="mt-6 md:mt-8 lg:mt-10" />
        <UsersTable
          users={users}
          loading={loading}
          error={error}
          onUserCreated={handleUserCreated}
        />
      </MainLayout>
    </>
  );
}

export default Users;
