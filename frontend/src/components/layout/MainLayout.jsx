import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';
import { Menu, Building2, User, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import { useFarm } from '../../context/FarmContext';
import { cn } from '../../lib/utils';
import { Toaster } from 'sonner';
import { Outlet } from 'react-router-dom';
import { X, Bell, Settings, ChevronDown, LogOut, Search } from 'lucide-react';

/**
 * Main application layout with sidebar and animated header.
 * Displays content with smooth transition when changing routes.
 *
 * @param {string} title - Title displayed in the header
 * @param {React.ReactNode} children - Page content
 * @param {string} className - Additional classes for the main container
 */
const MainLayout = ({ title = '', children, className }) => {
    // State to control sidebar expansion
    const [isDesktop, setIsDesktop] = useState(() => typeof window !== 'undefined' && window.innerWidth >= 1024);
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(() => (typeof window !== 'undefined' && window.innerWidth >= 1024));
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
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Effect to animate content entry when changing routes
    useEffect(() => {
        setShowContent(false);
        const timeout = setTimeout(() => setShowContent(true), 100);
        return () => clearTimeout(timeout);
    }, [location]);

    // Fetch farm information when component mounts and when route changes
    useEffect(() => {
        refreshFarm();
    }, [location.pathname, refreshFarm]);

    // Function to toggle the sidebar
    const handleSidebarToggle = () => setIsSidebarExpanded((prev) => !prev);

    // Transition class for content
    const contentClass = cn(
        'transition-all duration-300',
        showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
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
                    'w-full transition-all duration-200 ease-in-out',
                    !isSidebarExpanded ? 'max-w-full' : '',
                    className
                )}
                style={!isSidebarExpanded ? { marginLeft: 0, width: '100%' } : {}}
            >
                <Header 
                    title={title} 
                    onMenuClick={handleSidebarToggle} 
                    farmInfo={farmInfo} 
                    user={user}
                    onRefreshFarm={refreshFarm}
                />
                {/* Main content with animation */}
                <div className={cn(contentClass, 'px-4')}>{children}</div>
            </main>
        </div>
    );
};

// Separate header for clarity
function Header({ title, onMenuClick, farmInfo, user, onRefreshFarm }) {
    const navigate = useNavigate();
    const [refreshingFarm, setRefreshingFarm] = useState(false);
    
    const handleProfileClick = () => {
        navigate('/profile');
    };
    
    const handleRefreshFarm = async () => {
        setRefreshingFarm(true);
        await onRefreshFarm();
        setTimeout(() => setRefreshingFarm(false), 500); // Keep the icon spinning for at least 500ms for visual feedback
    };
    
    return (
        <header className="flex items-center justify-between px-2 sm:px-6 py-2 sm:py-3 bg-transparent border-b border-amber-100">
            <div className="flex items-center">
                <motion.button
                    onClick={onMenuClick}
                    aria-label="Open sidebar menu"
                    className="transition-transform duration-75"
                    whileTap={{ scale: 0.9 }}
                    type="button"
                >
                    <Menu className="w-5 h-5 sm:w-7 sm:h-7 text-[#10291a]" />
                </motion.button>
                <div className="text-[#10291a]">
                    <h2 className="text-base sm:text-xl lg:text-2xl ml-2 font-bold font-poppins truncate max-w-[100px] xs:max-w-[140px] sm:max-w-none">{title}</h2>
                </div>
            </div>
            
            {/* Right area with selected farm and user avatar */}
            <div className="flex items-center gap-1 sm:gap-4">
                {/* Selected farm */}
                <div 
                    className="flex items-center px-1.5 sm:px-3 py-1 sm:py-1.5 bg-amber-50 rounded-md border border-amber-200 hover:bg-amber-100 transition-colors group"
                    title="Current farm information"
                >
                    <Building2 className="w-3 h-3 sm:w-4 sm:h-4 text-amber-700 mr-1 sm:mr-2 flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-amber-800 truncate max-w-[70px] xs:max-w-[100px] sm:max-w-[120px] md:max-w-[150px] lg:max-w-[200px]">
                        {farmInfo ? farmInfo.name : "No farm selected"}
                    </span>
                    <button
                        onClick={handleRefreshFarm}
                        className="ml-1 sm:ml-2 text-amber-500 hover:text-amber-700 transition-colors focus:outline-none flex-shrink-0"
                        title="Refresh farm information"
                        disabled={refreshingFarm}
                    >
                        <RefreshCw className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${refreshingFarm ? 'animate-spin' : 'opacity-0 group-hover:opacity-100 transition-opacity'}`} />
                    </button>
                </div>
                
                {/* User avatar */}
                <div 
                    className="relative group"
                    title={user?.name || "User"}
                >
                    <div 
                        className="w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-amber-200 flex items-center justify-center text-amber-800 border-2 border-amber-300 hover:border-amber-400 transition-colors cursor-pointer shadow-sm"
                        onClick={handleProfileClick}
                    >
                        {user?.profile_photo ? (
                            <img 
                                src={user.profile_photo} 
                                alt={`${user.name}'s avatar`} 
                                className="w-full h-full rounded-full object-cover"
                            />
                        ) : (
                            <User className="w-3 h-3 sm:w-5 sm:h-5" />
                        )}
                    </div>
                    
                    {/* Tooltip with user name */}
                    <div className="absolute right-0 mt-2 w-max py-1 px-2 bg-amber-100 rounded shadow-md text-amber-800 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity z-50 pointer-events-none">
                        <div className="font-medium">{user?.name || "User"}</div>
                        <div className="text-amber-600 text-xs">Click to view profile</div>
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
    onRefreshFarm: PropTypes.func
};

MainLayout.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
};

export default MainLayout; 