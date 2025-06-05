import { motion } from "framer-motion";
import { Building2, Menu, RefreshCw, User } from "lucide-react";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useFarm } from "../../context/FarmContext";
import { cn } from "../../utils/cn";
import Sidebar from "./Sidebar";

/**
 * Main application layout with sidebar and animated header.
 * Displays content with smooth transition when changing routes.
 *
 * @param {string} title - Title displayed in the header
 * @param {React.ReactNode} children - Page content
 * @param {string} className - Additional classes for the main container
 */
const MainLayout = ({ title = "", children, className }) => {
  // State to control sidebar expansion
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== "undefined" && window.innerWidth >= 1024,
  );
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(
    () => typeof window !== "undefined" && window.innerWidth >= 1024,
  );
  const [showContent, setShowContent] = useState(false);
  const location = useLocation();
  const { user } = useAuth();
  const userType = user ? user.role : undefined;
  const { farmInfo, currentFarmId, refreshFarm } = useFarm();

  // Update isDesktop on resize
  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth >= 1024);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Effect to animate content entry when changing routes
  useEffect(() => {
    setShowContent(false);
    const timeout = setTimeout(() => setShowContent(true), 100);
    return () => clearTimeout(timeout);
  }, [location]);

  // Fetch farm information only once when component mounts
  useEffect(() => {
    if (user) {
      refreshFarm();
    }
  }, [user]);

  // Function to toggle the sidebar
  const handleSidebarToggle = () => setIsSidebarExpanded((prev) => !prev);

  // Transition class for content
  const contentClass = cn(
    "transition-all duration-300",
    showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
  );

  return (
    <div className="flex w-full">
      {/* Sidebar */}
      <Sidebar
        onToggle={handleSidebarToggle}
        isExpanded={isSidebarExpanded}
        showContent={showContent}
        userType={userType}
      />
      <main
        className={cn(
          "w-full transition-all duration-200 ease-in-out",
          !isSidebarExpanded ? "max-w-full" : "",
          className,
        )}
        style={!isSidebarExpanded ? { marginLeft: 0, width: "100%" } : {}}
      >
        <Header
          title={title}
          onMenuClick={handleSidebarToggle}
          farmInfo={farmInfo}
          user={user}
          onRefreshFarm={refreshFarm}
        />
        {/* Main content with animation */}
        <div className={cn(contentClass, "px-4")}>{children}</div>
      </main>
    </div>
  );
};

// Separate header for clarity
function Header({ title, onMenuClick, farmInfo, user, onRefreshFarm }) {
  const navigate = useNavigate();
  const [refreshingFarm, setRefreshingFarm] = useState(false);

  const handleProfileClick = () => {
    navigate("/profile");
  };

  const handleRefreshFarm = async () => {
    setRefreshingFarm(true);
    await onRefreshFarm();
    setTimeout(() => setRefreshingFarm(false), 500); // Keep the icon spinning for at least 500ms for visual feedback
  };

  return (
    <header className="flex items-center justify-between border-b border-amber-100 bg-transparent px-2 py-2 sm:px-6 sm:py-3">
      <div className="flex items-center">
        <motion.button
          onClick={onMenuClick}
          aria-label="Open sidebar menu"
          className="transition-transform duration-75"
          whileTap={{ scale: 0.9 }}
          type="button"
        >
          <Menu className="h-5 w-5 text-[#10291a] sm:h-7 sm:w-7" />
        </motion.button>
        <div className="text-[#10291a]">
          <h2 className="ml-2 max-w-[100px] truncate font-poppins text-base font-bold xs:max-w-[140px] sm:max-w-none sm:text-xl lg:text-2xl">
            {title}
          </h2>
        </div>
      </div>

      {/* Right area with selected farm and user avatar */}
      <div className="flex items-center gap-1 sm:gap-4">
        {/* Selected farm */}
        <div
          className="group flex items-center rounded-md border border-amber-200 bg-amber-50 px-1.5 py-1 transition-colors hover:bg-amber-100 sm:px-3 sm:py-1.5"
          title="Current farm information"
        >
          <Building2 className="mr-1 h-3 w-3 flex-shrink-0 text-amber-700 sm:mr-2 sm:h-4 sm:w-4" />
          <span className="max-w-[70px] truncate text-xs font-medium text-amber-800 xs:max-w-[100px] sm:max-w-[120px] sm:text-sm md:max-w-[150px] lg:max-w-[200px]">
            {farmInfo ? farmInfo.name : "No farm selected"}
          </span>
          <button
            onClick={handleRefreshFarm}
            className="ml-1 flex-shrink-0 text-amber-500 transition-colors hover:text-amber-700 focus:outline-none sm:ml-2"
            title="Refresh farm information"
            disabled={refreshingFarm}
          >
            <RefreshCw
              className={`h-3 w-3 sm:h-3.5 sm:w-3.5 ${refreshingFarm ? "animate-spin" : "opacity-0 transition-opacity group-hover:opacity-100"}`}
            />
          </button>
        </div>

        {/* User avatar */}
        <div className="group relative" title={user?.name || "User"}>
          <div
            className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border-2 border-amber-300 bg-amber-200 text-amber-800 shadow-sm transition-colors hover:border-amber-400 sm:h-10 sm:w-10"
            onClick={handleProfileClick}
          >
            {user?.profile_photo ? (
              <img
                src={user.profile_photo}
                alt={`${user.name}'s avatar`}
                className="h-full w-full rounded-full object-cover"
              />
            ) : (
              <User className="h-3 w-3 sm:h-5 sm:w-5" />
            )}
          </div>

          {/* Tooltip with user name */}
          <div className="pointer-events-none absolute right-0 z-50 mt-2 w-max rounded bg-amber-100 px-2 py-1 text-xs font-medium text-amber-800 opacity-0 shadow-md transition-opacity group-hover:opacity-100">
            <div className="font-medium">{user?.name || "User"}</div>
            <div className="text-xs text-amber-600">Click to view profile</div>
          </div>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  onMenuClick: PropTypes.func.isRequired,
  farmInfo: PropTypes.object,
  user: PropTypes.object,
  onRefreshFarm: PropTypes.func,
};

MainLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default MainLayout;
