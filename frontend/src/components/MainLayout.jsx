import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';
import { Menu } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Layout principal da aplicação, com sidebar e header animado.
 * Exibe o conteúdo com transição suave ao trocar de rota.
 *
 * @param {string} title - Título exibido no header
 * @param {React.ReactNode} children - Conteúdo da página
 */

const MainLayout = ({ title = '', children }) => {
    // Estado para controlar expansão do sidebar
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(true); // Começa expandido
    const [showContent, setShowContent] = useState(false);
    const [isDesktop, setIsDesktop] = useState(() => typeof window !== 'undefined' && window.innerWidth >= 1024);
    // Hook do React Router para detectar mudança de rota
    const location = useLocation();

    // Atualiza isDesktop ao redimensionar
    useEffect(() => {
        function handleResize() {
            setIsDesktop(window.innerWidth >= 1024);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Efeito para animar entrada do conteúdo ao trocar de rota
    useEffect(() => {
        setShowContent(false); // Esconde conteúdo
        const timeout = setTimeout(() => setShowContent(true), 100); // Mostra após 100ms
        return () => clearTimeout(timeout); // Limpa timeout ao desmontar
    }, [location]);

    // Classe de transição para o conteúdo
    const contentClass = `transition-all duration-300 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`;


    return (
        <div className="flex w-full">
            {/* Sidebar lateral */}
            <Sidebar
                onToggle={() => setIsSidebarExpanded((prev) => !prev)}
                isExpanded={isSidebarExpanded}
                showContent={showContent}
            />
            <main
                className={`w-full transition-all duration-200 ease-in-out ${!isSidebarExpanded ? 'max-w-full' : ''}`}
                style={!isSidebarExpanded ? { marginLeft: 0, width: '100%' } : {}}
            >
                {/* Header do layout */}
                <header className="flex items-center px-2 py-3 bg-transparent shadow-none">
                    {/* Botão de menu sempre visível, apenas ícone */}
                    <motion.button
                        onClick={() => setIsSidebarExpanded((prev) => !prev)}
                        aria-label="Abrir menu lateral"
                        className="transition-transform duration-75"
                        whileTap={{ scale: 0.9 }}
                        type="button"
                    >
                        <Menu className="w-7 h-7 text-[#10291a]" />
                    </motion.button>
                    {/* Título do header */}
                    <div className="text-[#10291a] w-full">
                        <h2 className="lg:text-2xl ml-2 font-bold font-poppins">{title}</h2>
                    </div>
                </header>
                {/* Conteúdo principal com animação */}
                <div className={contentClass}>{children}</div>
            </main>
        </div>
    );
};

MainLayout.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
};

export default MainLayout;
