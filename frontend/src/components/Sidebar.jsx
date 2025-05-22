// src/components/Sidebar.jsx
import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import {
    LayoutDashboard,
    Users,
    Droplets,
    Package,
    User,
    Icon,
    Menu
} from 'lucide-react';
import { cowHead } from '@lucide/lab';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import LogoutButton from './LogoutButton';

/**
 * Sidebar de navegação principal
 * @param {{ onToggle?: () => void, isExpanded?: boolean, showContent?: boolean }} props
 */
function Sidebar({ onToggle, isExpanded, showContent }) {
    const isDesktop = useIsDesktop();
    const expanded = isDesktop ? true : isExpanded;
    const navigate = useNavigate();

    // Classes calculadas
    // Troca o fundo para verde ainda mais escuro
    // ALTERAÇÃO: Sidebar agora é fixa para sobrepor o conteúdo e permite scroll
    // Sidebar: fixa no mobile (inset-0 cobre toda a tela), relativa no desktop (min-h-screen)
    const asideBase = 'fixed inset-0 lg:relative lg:min-h-screen bg-[#10291a]/95 text-[#fff8f0] flex flex-col shadow-lg border-r-2 border-[#bfa77a] z-40 transition-all duration-300 ease-in-out overflow-y-auto hide-scrollbar';
    const asideExpanded = expanded ? 'translate-x-0 w-64' : '-translate-x-0 w-0';
    const asideDesktop = 'lg:translate-x-0 lg:w-64';
    const asideShowContent = isDesktop ? (showContent ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8') : '';
    const asidePointer = !expanded && !isDesktop ? 'pointer-events-none select-none' : '';
    const asideClass = `${asideBase} ${asideExpanded} ${asideDesktop} transition-all duration-300 ${asideShowContent} ${asidePointer}`;

    // Função para sair
    function handleLogout() {
        navigate('/');
    }

    return (
        <>
            {/* Overlay escuro ao abrir a sidebar no mobile */}
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

            {/* Botão de menu (mobile) */}
            <motion.button
                onClick={onToggle}
                aria-label="Abrir menu lateral"
                className="bg-gradient-to-br from-[#bfa77a] via-[#f9e7c2] to-[#a97c50] text-[#7c5a3a] p-2 rounded-xl shadow-lg fixed top-4 left-4 z-50 block lg:hidden active:scale-90 transition-transform duration-150 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#bfa77a]"
                style={{ boxShadow: '0 2px 8px 0 #bfa77a55' }}
                whileTap={{ scale: 0.9 }}
            >
                <Menu className="w-7 h-7" />
            </motion.button>

            {/* Sidebar */}
            <motion.aside
                className={asideClass}
                style={{
                    willChange: 'transform, width',
                    backgroundRepeat: 'repeat',
                    backgroundSize: 'auto',
                    boxShadow: '2px 0 12px 0 #bfa77a'
                }}
                initial={{ x: isDesktop ? 0 : -300, opacity: 0 }}
                animate={{ x: expanded ? 0 : -300, opacity: expanded ? 1 : 0 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ type: 'tween' }}
            >

                {/* Logo */}
                <div className={`relative z-10 p-4 flex items-center justify-center ${!expanded && !isDesktop ? 'hidden' : ''} ${!isDesktop ? 'mt-4 ml-12' : ''}`}>
                    <Link to="/dashboard" className="flex items-center text-xl font-bold text-[#fff8f0]">
                        <Icon iconNode={cowHead} className="h-8 w-8 transition-opacity duration-300 opacity-100 text-[#ffe6c7] drop-shadow" />
                        <motion.span
                            className={`ml-2 transition-opacity duration-300 font-poppins tracking-wide ${expanded ? 'opacity-100' : 'opacity-0'} lg:opacity-100 text-[#fff8f0]`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: expanded ? 1 : 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Moovox
                        </motion.span>
                    </Link>
                </div>

                {/* Navegação */}
                <nav className={`relative z-10 mt-6 flex flex-col gap-0 ${!expanded && !isDesktop ? 'hidden' : ''}`}>
                    <AnimatePresence>
                        {menuItems.map(({ to, icon, label }) => (
                            <motion.div
                                key={to}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <NavLink
                                    to={to}
                                    tabIndex={0}
                                    className={({ isActive }) =>
                                        `flex items-center p-4 rounded-lg mx-2 my-1 font-semibold border border-transparent hover:bg-[#fff8f0]/10 hover:text-[#fff8f0] transition-colors duration-200 ${isActive ? 'bg-[#246426] text-[#ffffff] shadow-md border-l-4 border-[#4caf50]' : 'text-[#fff8f0]'}`
                                    }
                                >
                                    {icon}
                                    <span className={`transition-opacity duration-300 ${expanded ? 'opacity-100' : 'opacity-0'} lg:opacity-100 text-[#fff8f0]`}>{label}</span>
                                </NavLink>
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {/* Botão Sair */}
                    <LogoutButton
                        onLogout={handleLogout}
                        expanded={expanded}
                    />
                </nav>

                {/* Rodapé */}
                <motion.div
                    className={`relative z-10 p-4 mt-auto text-center text-xs text-[#ffe6c7] transition-opacity duration-300 ${!expanded && !isDesktop ? 'hidden' : ''}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: expanded ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className={`${expanded ? 'opacity-100' : 'opacity-0'}`}>© 2025 Moovox</span>
                </motion.div>
            </motion.aside>
        </>
    );
}

// Hook customizado para detectar desktop responsivo
function useIsDesktop() {
    const [isDesktop, setIsDesktop] = React.useState(() => typeof window !== 'undefined' && window.innerWidth >= 1024);
    React.useEffect(() => {
        function handleResize() {
            setIsDesktop(window.innerWidth >= 1024);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return isDesktop;
}

// Ícones memoizados
const dashboardIcon = <LayoutDashboard className="mr-2 w-5 h-5" />;
const usersIcon = <Users className="mr-2 w-5 h-5" />;
const animaisIcon = <Icon iconNode={cowHead} className="mr-2 w-5 h-5" />;
const vacinasIcon = <Droplets className="mr-2 w-5 h-5" />;
const aplicacoesIcon = <Package className="mr-2 w-5 h-5" />;
const perfilIcon = <User className="mr-2 w-5 h-5" />;

// Itens do menu
const menuItems = [
    {
        to: '/dashboard',
        icon: dashboardIcon,
        label: 'Dashboard',
    },
    {
        to: '/usuarios',
        icon: usersIcon,
        label: 'Usuários',
    },
    {
        to: '/animais',
        icon: animaisIcon,
        label: 'Animais',
    },
    {
        to: '/vacinas',
        icon: vacinasIcon,
        label: 'Vacinas',
    },
    {
        to: '/aplicacoes',
        icon: aplicacoesIcon,
        label: 'Aplicações',
    },
    {
        to: '/meu-perfil',
        icon: perfilIcon,
        label: 'Meu Perfil',
    },
];

Sidebar.propTypes = {
    onToggle: PropTypes.func,
    isExpanded: PropTypes.bool,
    showContent: PropTypes.bool,
};

Sidebar.defaultProps = {
    onToggle: () => {},
    isExpanded: false,
    showContent: false,
};

export default Sidebar;