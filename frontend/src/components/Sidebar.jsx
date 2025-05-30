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
import LogoutButton from './LogoutButton';
import { useAuth } from './AuthContext';
import '../styles/sidebar.css';

// Hook customizado para detectar se é desktop
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

// Header da Sidebar com logo e nome
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

// Navegação da Sidebar
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

// Footer da Sidebar
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

// Ícones do menu
const dashboardIcon = <LayoutDashboard className="mr-2 w-5 h-5" />;
const usersIcon = <Users className="mr-2 w-5 h-5" />;
const animaisIcon = <Icon iconNode={cowHead} className="mr-2 w-5 h-5" />;
const vacinasIcon = <Droplets className="mr-2 w-5 h-5" />;
const aplicacoesIcon = <Package className="mr-2 w-5 h-5" />;
const perfilIcon = <User className="mr-2 w-5 h-5" />;
const mapaIcon = <Map className="mr-2 w-5 h-5" />;
const fazendasIcon = <Building2 className="mr-2 w-5 h-5" />;

// Itens do menu lateral
const menuItems = [
    { to: '/dashboard', icon: dashboardIcon, label: 'Dashboard' },
    { to: '/usuarios', icon: usersIcon, label: 'Usuários', adminOnly: true },
    { to: '/fazendas', icon: fazendasIcon, label: 'Fazendas', adminOnly: true },
    { to: '/animais', icon: animaisIcon, label: 'Animais' },
    { to: '/mapa-animais', icon: mapaIcon, label: 'Mapa de Animais' },
    { to: '/vacinas', icon: vacinasIcon, label: 'Vacinas' },
    { to: '/aplicacoes', icon: aplicacoesIcon, label: 'Aplicações' },
    { to: '/meu-perfil', icon: perfilIcon, label: 'Meu Perfil' },
];

// Componente principal da Sidebar
function Sidebar({ onToggle, isExpanded, showContent, userType }) {
    const isDesktop = useIsDesktop();
    const expanded = isExpanded;
    const navigate = useNavigate();

    // Filtra os itens do menu com base no tipo de usuário
    const filteredMenuItems = useMemo(() =>
        menuItems.filter(item => !(item.adminOnly === true && String(userType).toLowerCase() !== 'admin'))
    , [userType]);

    // Função de logout
    const handleLogout = useCallback(() => {
        navigate('/');
    }, [navigate]);

    return (
        <>
            {/* Overlay para mobile */}
            <AnimatePresence>
                {!isDesktop && expanded && (
                    <motion.div
                        className="fixed inset-0 bg-black/40 z-30 transition-opacity duration-300 pointer-events-auto"
                        onClick={onToggle}
                        tabIndex={0}
                        role="button"
                        aria-label="Fechar menu lateral"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />
                )}
            </AnimatePresence>

            {/* Sidebar principal */}
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