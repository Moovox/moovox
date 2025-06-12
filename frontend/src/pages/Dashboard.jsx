import { motion } from "framer-motion";
import React from "react";
import { Helmet } from "react-helmet-async";
import {
  AnimalTelemetry,
  DashboardStats,
  LoadingState,
  MapCard,
  RecentUsers,
  VaccineStatus,
} from "../components/features/dashboard";
import MainLayout from "../components/layout/MainLayout";
import { useDashboard } from "../hooks/useDashboard";
import "../styles/pages/dashboard.css";

function Dashboard() {
  const { stats, ultimosUsuarios, dosesMensagem, telemetria, loading, error } =
    useDashboard();

  return (
    <>
      <Helmet>
        <title>Moovox | Dashboard</title>
        <meta name="description" content="Moovox Dashboard" />
      </Helmet>
      <div>
        <MainLayout
          title="Admin Panel"
          className="min-h-screen bg-gradient-to-br from-[#fff8f0] via-[#f9e7c2] to-[#bfa77a]"
        >
          <div className="mt-4 sm:mt-6 md:mt-8" />

          <LoadingState loading={loading} error={error} />

          {!loading && !error && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 space-y-4 overflow-hidden pb-6 sm:mb-6 sm:space-y-6 sm:pb-10 md:space-y-8"
            >
              {/* Main statistics cards */}
              <DashboardStats stats={stats} />

              {/* Secondary cards */}
              <div className="grid grid-cols-1 gap-4 overflow-visible sm:gap-6 md:grid-cols-2">
                <RecentUsers ultimosUsuarios={ultimosUsuarios} />
                <VaccineStatus dosesMensagem={dosesMensagem} />
              </div>

              {/* Animal map and telemetry */}
              <div className="grid grid-cols-1 gap-4 overflow-visible sm:gap-6 md:grid-cols-2">
                <MapCard />
                <AnimalTelemetry telemetria={telemetria} />
              </div>
            </motion.div>
          )}
        </MainLayout>
      </div>
    </>
  );
}

export default Dashboard;
