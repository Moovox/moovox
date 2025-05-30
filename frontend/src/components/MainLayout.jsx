import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';
import { Menu, Building2, User, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from './AuthContext';
import { cn } from '../lib/utils';
import { fazendaService } from '../services/fazendaService';

/**
 * Layout principal da aplicação, com sidebar e header animado.
 * Exibe o conteúdo com transição suave ao trocar de rota.
 *
 * @param {string} title - Título exibido no header
 * @param {React.ReactNode} children - Conteúdo da página
 * @param {string} className - Classes adicionais para o container principal
 */

const MainLayout = ({ title = '', children, className }) => {
    // Estado para controlar expansão do sidebar
    const [isDesktop, setIsDesktop] = useState(() => typeof window !== 'undefined' && window.innerWidth >= 1024);
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(() => (typeof window !== 'undefined' && window.innerWidth >= 1024));
    const [showContent, setShowContent] = useState(false);
    const location = useLocation();
    const { user } = useAuth();
    const userType = user ? user.role : undefined;
    const [farmInfo, setFarmInfo] = useState(null);

    // Buscar informações da fazenda atual
    const buscarFazendaAtual = async () => {
        try {
            const resultado = await fazendaService.verificarFazendaSelecionada();
            if (resultado.valido) {
                setFarmInfo(resultado.fazenda);
            } else {
                setFarmInfo(null);
            }
        } catch (error) {
            console.error('Erro ao buscar fazenda:', error);
            setFarmInfo(null);
        }
    };

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
        setShowContent(false);
        const timeout = setTimeout(() => setShowContent(true), 100);
        return () => clearTimeout(timeout);
    }, [location]);

    // Buscar informações da fazenda ao montar o componente e quando mudar de rota
    useEffect(() => {
        buscarFazendaAtual();
    }, [location.pathname]);

    // Função para alternar a sidebar
    const handleSidebarToggle = () => setIsSidebarExpanded((prev) => !prev);

    // Classe de transição para o conteúdo
    const contentClass = cn(
        'transition-all duration-300',
        showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    );

    return (
        <div className="flex w-full">
            {/* Sidebar lateral */}
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
                    onRefreshFarm={buscarFazendaAtual}
                />
                {/* Conteúdo principal com animação */}
                <div className={cn(contentClass, 'px-4')}>{children}</div>
            </main>
        </div>
    );
};

// Header separado para clareza
function Header({ title, onMenuClick, farmInfo, user, onRefreshFarm }) {
    const navigate = useNavigate();
    const [refreshingFarm, setRefreshingFarm] = useState(false);
    
    const handleProfileClick = () => {
        navigate('/meu-perfil');
    };
    
    const handleRefreshFarm = async () => {
        setRefreshingFarm(true);
        await onRefreshFarm();
        setTimeout(() => setRefreshingFarm(false), 500); // Mantém o ícone girando por pelo menos 500ms para feedback visual
    };
    
    return (
        <header className="flex items-center justify-between px-3 sm:px-6 py-3 bg-transparent border-b border-amber-100">
            <div className="flex items-center">
                <motion.button
                    onClick={onMenuClick}
                    aria-label="Abrir menu lateral"
                    className="transition-transform duration-75"
                    whileTap={{ scale: 0.9 }}
                    type="button"
                >
                    <Menu className="w-6 h-6 sm:w-7 sm:h-7 text-[#10291a]" />
                </motion.button>
                <div className="text-[#10291a]">
                    <h2 className="text-lg sm:text-xl lg:text-2xl ml-2 font-bold font-poppins truncate max-w-[180px] sm:max-w-none">{title}</h2>
                </div>
            </div>
            
            {/* Área direita com fazenda selecionada e avatar do usuário */}
            <div className="flex items-center space-x-2 sm:space-x-4">
                {/* Fazenda selecionada */}
                <div 
                    className="flex items-center px-2 sm:px-3 py-1.5 bg-amber-50 rounded-md border border-amber-200 hover:bg-amber-100 transition-colors group"
                    title="Informações da fazenda atual"
                >
                    <Building2 className="w-4 h-4 text-amber-700 mr-1 sm:mr-2 flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-amber-800 truncate max-w-[80px] sm:max-w-[120px] md:max-w-[150px] lg:max-w-[200px]">
                        {farmInfo ? farmInfo.name : "Sem fazenda"}
                    </span>
                    <button
                        onClick={handleRefreshFarm}
                        className="ml-1 sm:ml-2 text-amber-500 hover:text-amber-700 transition-colors focus:outline-none flex-shrink-0"
                        title="Atualizar informações da fazenda"
                        disabled={refreshingFarm}
                    >
                        <RefreshCw className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${refreshingFarm ? 'animate-spin' : 'opacity-0 group-hover:opacity-100 transition-opacity'}`} />
                    </button>
                </div>
                
                {/* Avatar do usuário */}
                <div 
                    className="relative group"
                    title={user?.name || "Usuário"}
                >
                    <div 
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-amber-200 flex items-center justify-center text-amber-800 border-2 border-amber-300 hover:border-amber-400 transition-colors cursor-pointer shadow-sm"
                        onClick={handleProfileClick}
                    >
                        {user?.profile_photo ? (
                            <img 
                                src={user.profile_photo} 
                                alt={`Avatar de ${user.name}`} 
                                className="w-full h-full rounded-full object-cover"
                            />
                        ) : (
                            <User className="w-4 h-4 sm:w-5 sm:h-5" />
                        )}
                    </div>
                    
                    {/* Tooltip com o nome do usuário */}
                    <div className="absolute right-0 mt-2 w-max py-1 px-2 bg-amber-100 rounded shadow-md text-amber-800 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity z-50 pointer-events-none">
                        <div className="font-medium">{user?.name || "Usuário"}</div>
                        <div className="text-amber-600 text-xs">Clique para ver perfil</div>
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
