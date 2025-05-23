import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';
import { Menu } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Layout principal com sidebar e loader
 * @param {{ title?: string, children?: React.ReactNode }} props
 */

function MainLayout({ title, children }) {
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setShowContent(false);
        const timeout = setTimeout(() => setShowContent(true), 100);
        return () => clearTimeout(timeout);
    }, [location]);

    const contentClass = `transition-all duration-300 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`;

    return (
        <div className="flex min-h-screen ">
            <Sidebar
                onToggle={() => setIsSidebarExpanded(!isSidebarExpanded)}
                isExpanded={isSidebarExpanded}
                showContent={showContent}
            />
            
            <main className="flex-grow transition-all duration-200 ease-in-out">
                <header className={`flex items-center gap-4 rounded-2xl transition-all duration-300 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <motion.button
                        onClick={() => setIsSidebarExpanded(!isSidebarExpanded)}
                        aria-label="Abrir menu lateral"
                        className={`text-black rounded-xl top-4 left-4 transition-transform duration-75 lg:hidden active:scale-90 ${isSidebarExpanded ? 'z-10' : 'z-50'}`}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Menu className="w-7 h-7" />
                    </motion.button>

                    <div className='bg-black text-white w-full'>
                        <h2 className="lg:text-2xl lg:ml-6 font-bold font-poppins">{title}</h2>
                        
                    </div>
                </header>
                <div className={contentClass}>{children}</div>
            </main>
        </div>
    );
}

MainLayout.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    children: PropTypes.node,
};

MainLayout.defaultProps = {
    title: '',
    description: '',
};

export default MainLayout;
