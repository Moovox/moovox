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
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
    // Estado para controlar animação de entrada do conteúdo
    const [showContent, setShowContent] = useState(false);
    // Hook do React Router para detectar mudança de rota
    const location = useLocation();

    // Efeito para animar entrada do conteúdo ao trocar de rota
    useEffect(() => {
        setShowContent(false); // Esconde conteúdo
        const timeout = setTimeout(() => setShowContent(true), 100); // Mostra após 100ms
        return () => clearTimeout(timeout); // Limpa timeout ao desmontar
    }, [location]);

    // Classe de transição para o conteúdo
    const contentClass = `transition-all duration-300 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`;

    return (
        <div className="flex">
            {/* Sidebar lateral */}
            <Sidebar
                onToggle={() => setIsSidebarExpanded((prev) => !prev)}
                isExpanded={isSidebarExpanded}
                showContent={showContent}
            />
            <main className="w-screen transition-all duration-200 ease-in-out">
                {/* Header do layout */}
                <header className="flex bg-black">
                    {/* Botão de menu para mobile */}
                    <motion.button
                        onClick={() => setIsSidebarExpanded((prev) => !prev)}
                        aria-label="Abrir menu lateral"
                        className={`text-white rounded-xl top-4 left-4 transition-transform duration-75 lg:hidden active:scale-90 ${isSidebarExpanded ? 'z-10' : 'z-50'}`}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Menu className="w-7 h-7" />
                    </motion.button>
                    {/* Título do header */}
                    <div className="text-white w-full">
                        <h2 className="lg:text-2xl lg:ml-6 font-bold font-poppins">{title}</h2>
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
