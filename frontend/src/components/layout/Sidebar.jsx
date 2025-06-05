import { cowHead } from "@lucide/lab";
import { AnimatePresence, motion } from "framer-motion";
import {
  Building2,
  Droplets,
  Icon,
  LayoutDashboard,
  Map,
  Package,
  User,
  User2 as Users,
} from "lucide-react";
import PropTypes from "prop-types";
import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../../styles/components/sidebar.css";
import LogoutButton from "../common/LogoutButton";

// Custom hook to detect if viewport is desktop size
function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== "undefined" && window.innerWidth >= 1024,
  );

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isDesktop;
}

// Sidebar header with logo and name
const SidebarHeader = memo(({ expanded, isDesktop }) => (
  <div
    className={`flex min-h-16 w-full items-center justify-center ${!expanded && !isDesktop ? "hidden" : ""}`}
  >
    <Link to="/dashboard">
      <p className="font-poppins text-2xl font-semibold sm:text-3xl">Moovox</p>
    </Link>
  </div>
));

SidebarHeader.propTypes = {
  expanded: PropTypes.bool.isRequired,
  isDesktop: PropTypes.bool.isRequired,
};

// Sidebar navigation
const SidebarNavigation = memo(
  ({ menuItems, expanded, isDesktop, handleLogout }) => (
    <nav
      className={`relative z-10 mt-2 flex flex-col gap-1 ${!expanded && !isDesktop ? "hidden" : ""}`}
    >
      <AnimatePresence>
        {menuItems.map(({ to, icon, label }) => (
          <motion.div
            key={to}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            <NavLink
              to={to}
              tabIndex={0}
              className={({ isActive }) =>
                `mx-1 my-0.5 flex items-center rounded-md border border-transparent px-3 py-2 text-sm font-medium transition-colors duration-150 hover:bg-[#fff8f0]/10 hover:text-[#fff8f0] ${isActive ? "border-l-4 border-[#4caf50] bg-[#246426] text-[#ffffff] shadow" : "text-[#fff8f0]"}`
              }
            >
              {icon}
              <span
                className={`transition-opacity duration-200 ${expanded ? "opacity-100" : "opacity-0"} ml-1 text-[#fff8f0] lg:opacity-100`}
              >
                {label}
              </span>
            </NavLink>
          </motion.div>
        ))}
      </AnimatePresence>
      <LogoutButton onLogout={handleLogout} expanded={expanded} />
    </nav>
  ),
);

SidebarNavigation.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      icon: PropTypes.node.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  expanded: PropTypes.bool.isRequired,
  isDesktop: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

// Sidebar footer
const SidebarFooter = memo(({ expanded }) => (
  <motion.div
    className={`relative z-10 mt-auto p-4 text-center text-xs text-[#ffe6c7] transition-opacity duration-300 ${!expanded ? "hidden" : ""}`}
    initial={{ opacity: 0 }}
    animate={{ opacity: expanded ? 1 : 0 }}
    transition={{ duration: 0.5 }}
  >
    <span className={`${expanded ? "opacity-100" : "opacity-0"}`}>
      © 2025 Moovox
    </span>
  </motion.div>
));

SidebarFooter.propTypes = {
  expanded: PropTypes.bool.isRequired,
};

// Menu icons
const dashboardIcon = <LayoutDashboard className="mr-2 h-5 w-5" />;
const usersIcon = <Users className="mr-2 h-5 w-5" />;
const animalsIcon = <Icon iconNode={cowHead} className="mr-2 h-5 w-5" />;
const vaccinesIcon = <Droplets className="mr-2 h-5 w-5" />;
const applicationsIcon = <Package className="mr-2 h-5 w-5" />;
const profileIcon = <User className="mr-2 h-5 w-5" />;
const mapIcon = <Map className="mr-2 h-5 w-5" />;
const farmsIcon = <Building2 className="mr-2 h-5 w-5" />;

// Sidebar menu items
const menuItems = [
  { to: "/dashboard", icon: dashboardIcon, label: "Dashboard" },
  { to: "/users", icon: usersIcon, label: "Users", adminOnly: true },
  { to: "/farms", icon: farmsIcon, label: "Farms", adminOnly: true },
  { to: "/animals", icon: animalsIcon, label: "Animals" },
  { to: "/animal-map", icon: mapIcon, label: "Animal Map" },
  { to: "/vaccines", icon: vaccinesIcon, label: "Vaccines" },
  { to: "/applications", icon: applicationsIcon, label: "Applications" },
  { to: "/profile", icon: profileIcon, label: "My Profile" },
];

// Main Sidebar component
function Sidebar({ onToggle, isExpanded, showContent, userType }) {
  const isDesktop = useIsDesktop();
  const expanded = isExpanded;
  const navigate = useNavigate();

  // Filter menu items based on user type
  const filteredMenuItems = useMemo(
    () =>
      menuItems.filter(
        (item) =>
          !(
            item.adminOnly === true &&
            String(userType).toLowerCase() !== "admin"
          ),
      ),
    [userType],
  );

  // Logout function
  const handleLogout = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <>
      {/* Mobile overlay */}
      <AnimatePresence>
        {!isDesktop && expanded && (
          <motion.div
            className="pointer-events-auto fixed inset-0 z-30 bg-black/40 transition-opacity duration-300"
            onClick={onToggle}
            tabIndex={0}
            role="button"
            aria-label="Close sidebar menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      {/* Main sidebar */}
      <motion.aside
        className={`hide-scrollbar fixed inset-0 z-40 flex flex-col overflow-y-auto bg-[#10291a]/95 text-[#fff8f0] transition-all duration-300 ease-in-out lg:relative lg:min-h-screen ${expanded ? "w-64 translate-x-0" : "w-0"} lg:translate-x-0 ${isDesktop && !showContent ? "-translate-x-8 opacity-0" : "translate-x-0 opacity-100"} ${!expanded && !isDesktop ? "pointer-events-none select-none" : ""} `}
        style={{
          willChange: "transform, width",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
          boxShadow: isDesktop ? "none" : "2px 0 12px 0 #bfa77a",
        }}
        initial={{ x: isDesktop ? 0 : -300, opacity: 0 }}
        animate={{ x: expanded ? 0 : -300, opacity: expanded ? 1 : 0 }}
        exit={{ x: -300, opacity: 0 }}
        transition={{ type: "tween" }}
      >
        <SidebarHeader expanded={expanded} isDesktop={isDesktop} />
        <SidebarNavigation
          menuItems={filteredMenuItems}
          expanded={expanded}
          isDesktop={isDesktop}
          handleLogout={handleLogout}
        />
        <SidebarFooter expanded={expanded} />
      </motion.aside>
    </>
  );
}

Sidebar.propTypes = {
  onToggle: PropTypes.func,
  isExpanded: PropTypes.bool,
  showContent: PropTypes.bool,
  userType: PropTypes.string.isRequired,
};

Sidebar.defaultProps = {
  onToggle: () => {},
  isExpanded: false,
  showContent: false,
};

export default memo(Sidebar);
