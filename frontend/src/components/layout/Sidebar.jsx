import { memo, useState, useEffect, useMemo, useCallback } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { 
    LayoutDashboard, 
    User2 as Users, 
    Droplets, 
    Package, 
    User, 
    Map,
    Icon,
    Building2
} from 'lucide-react';
import { cowHead } from '@lucide/lab';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import LogoutButton from '../common/LogoutButton';
import { useAuth } from '../../context/AuthContext';
import '../../styles/sidebar.css';

// Custom hook to detect if viewport is desktop size
function useIsDesktop() {
    const [isDesktop, setIsDesktop] = useState(() => 
        typeof window !== 'undefined' && window.innerWidth >= 1024
    );
    
    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    return isDesktop;
}

// Sidebar header with logo and name
const SidebarHeader = memo(({ expanded, isDesktop }) => (
    <div className={`flex justify-center items-center w-full min-h-16 ${!expanded && !isDesktop ? 'hidden' : ''}`}>
        <Link to="/dashboard">
            <p className='text-2xl sm:text-3xl font-semibold font-poppins'>Moovox</p>
        </Link>
    </div>
));

SidebarHeader.propTypes = {
    expanded: PropTypes.bool.isRequired,
    isDesktop: PropTypes.bool.isRequired,
};

// Sidebar navigation
const SidebarNavigation = memo(({ menuItems, expanded, isDesktop, handleLogout }) => (
    <nav className={`relative z-10 mt-2 flex flex-col gap-1 ${!expanded && !isDesktop ? 'hidden' : ''}`}>
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
                            `flex items-center px-3 py-2 rounded-md mx-1 my-0.5 text-sm font-medium border border-transparent hover:bg-[#fff8f0]/10 hover:text-[#fff8f0] transition-colors duration-150 ${isActive ? 'bg-[#246426] text-[#ffffff] shadow border-l-4 border-[#4caf50]' : 'text-[#fff8f0]'}`
                        }
                    >
                        {icon}
                        <span className={`transition-opacity duration-200 ${expanded ? 'opacity-100' : 'opacity-0'} lg:opacity-100 text-[#fff8f0] ml-1`}>{label}</span>
                    </NavLink>
                </motion.div>
            ))}
        </AnimatePresence>
        <LogoutButton onLogout={handleLogout} expanded={expanded} />
    </nav>
));

SidebarNavigation.propTypes = {
    menuItems: PropTypes.arrayOf(
        PropTypes.shape({
            to: PropTypes.string.isRequired,
            icon: PropTypes.node.isRequired,
            label: PropTypes.string.isRequired,
        })
    ).isRequired,
    expanded: PropTypes.bool.isRequired,
    isDesktop: PropTypes.bool.isRequired,
    handleLogout: PropTypes.func.isRequired,
};

// Sidebar footer
const SidebarFooter = memo(({ expanded }) => (
    <motion.div
        className={`relative z-10 p-4 mt-auto text-center text-xs text-[#ffe6c7] transition-opacity duration-300 ${!expanded ? 'hidden' : ''}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: expanded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
    >
        <span className={`${expanded ? 'opacity-100' : 'opacity-0'}`}>© 2025 Moovox</span>
    </motion.div>
));

SidebarFooter.propTypes = {
    expanded: PropTypes.bool.isRequired,
};

// Menu icons
const dashboardIcon = <LayoutDashboard className="mr-2 w-5 h-5" />;
const usersIcon = <Users className="mr-2 w-5 h-5" />;
const animalsIcon = <Icon iconNode={cowHead} className="mr-2 w-5 h-5" />;
const vaccinesIcon = <Droplets className="mr-2 w-5 h-5" />;
const applicationsIcon = <Package className="mr-2 w-5 h-5" />;
const profileIcon = <User className="mr-2 w-5 h-5" />;
const mapIcon = <Map className="mr-2 w-5 h-5" />;
const farmsIcon = <Building2 className="mr-2 w-5 h-5" />;

// Sidebar menu items
const menuItems = [
    { to: '/dashboard', icon: dashboardIcon, label: 'Dashboard' },
    { to: '/users', icon: usersIcon, label: 'Users', adminOnly: true },
    { to: '/farms', icon: farmsIcon, label: 'Farms', adminOnly: true },
    { to: '/animals', icon: animalsIcon, label: 'Animals' },
    { to: '/animal-map', icon: mapIcon, label: 'Animal Map' },
    { to: '/vaccines', icon: vaccinesIcon, label: 'Vaccines' },
    { to: '/applications', icon: applicationsIcon, label: 'Applications' },
    { to: '/profile', icon: profileIcon, label: 'My Profile' },
];

// Main Sidebar component
function Sidebar({ onToggle, isExpanded, showContent, userType }) {
    const isDesktop = useIsDesktop();
    const expanded = isExpanded;
    const navigate = useNavigate();

    // Filter menu items based on user type
    const filteredMenuItems = useMemo(() =>
        menuItems.filter(item => !(item.adminOnly === true && String(userType).toLowerCase() !== 'admin'))
    , [userType]);

    // Logout function
    const handleLogout = useCallback(() => {
        navigate('/');
    }, [navigate]);

    return (
        <>
            {/* Mobile overlay */}
            <AnimatePresence>
                {!isDesktop && expanded && (
                    <motion.div
                        className="fixed inset-0 bg-black/40 z-30 transition-opacity duration-300 pointer-events-auto"
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
                className={`fixed inset-0 lg:relative lg:min-h-screen bg-[#10291a]/95 text-[#fff8f0] flex flex-col z-40 transition-all duration-300 ease-in-out overflow-y-auto hide-scrollbar
                    ${expanded ? 'translate-x-0 w-64' : 'w-0'}
                    lg:translate-x-0
                    ${isDesktop && !showContent ? 'opacity-0 -translate-x-8' : 'opacity-100 translate-x-0'}
                    ${!expanded && !isDesktop ? 'pointer-events-none select-none' : ''}
                `}
                style={{
                    willChange: 'transform, width',
                    backgroundRepeat: 'repeat',
                    backgroundSize: 'auto',
                    boxShadow: isDesktop ? 'none' : '2px 0 12px 0 #bfa77a',
                }}
                initial={{ x: isDesktop ? 0 : -300, opacity: 0 }}
                animate={{ x: expanded ? 0 : -300, opacity: expanded ? 1 : 0 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ type: 'tween' }}
            >
                <SidebarHeader expanded={expanded} isDesktop={isDesktop} />
                <SidebarNavigation menuItems={filteredMenuItems} expanded={expanded} isDesktop={isDesktop} handleLogout={handleLogout} />
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