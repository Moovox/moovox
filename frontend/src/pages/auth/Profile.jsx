import React from "react";
import { Helmet } from "react-helmet-async";
import MainLayout from "../../components/layout/MainLayout";

function Profile() {
  return (
    <>
      <Helmet>
        <title>Moovox | Profile</title>
        <meta name="description" content="User Profile" />
      </Helmet>
      <MainLayout
        title="Profile"
        className="min-h-screen bg-gradient-to-br from-[#fff8f0] via-[#f9e7c2] to-[#bfa77a]"
      >
        <p className="p-4 text-gray-800">User profile page.</p>
      </MainLayout>
    </>
  );
}

export default Profile;
