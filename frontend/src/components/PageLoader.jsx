import React from 'react';
import { cowHead } from '@lucide/lab';
import { Icon } from 'lucide-react';
import PropTypes from 'prop-types';
import '../styles/PageLoader.css';

/**
 * Loader temático com radar e vaca
 * @param {{ icon?: React.ReactNode, color?: string, className?: string }} props
 */
const COLOR_MAP = {
  'green-700': 'text-green-700',
  'green-600': 'text-green-600',
  'green-500': 'text-green-500',
  'green-400': 'text-green-400',
  'green-300': 'text-green-300',
  'green-200': 'text-green-200',
  'green-100': 'text-green-100',
  // Adicione mais cores conforme necessário
};

function PageLoader({ icon, color = 'green-700', className = '' }) {
    const iconColorClass = COLOR_MAP[color] || color;
    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 ${className}`}
            role="status"
            aria-live="polite"
        >
            <div className="relative flex items-center justify-center">
                {/* Pulsos de radar */}
                <span className="absolute w-32 h-32 rounded-full border-4 border-green-400 opacity-60 animate-pulse-slow" />
                <span className="absolute w-20 h-20 rounded-full border-2 border-green-300 opacity-40 animate-pulse-medium" />
                <span className="absolute w-12 h-12 rounded-full border-2 border-green-200 opacity-30 animate-pulse-fast" />
                {/* Ícone customizável */}
                <span className="relative z-10 bg-white rounded-full p-4 shadow-lg flex items-center justify-center">
                    {icon || <Icon iconNode={cowHead} className={`w-12 h-12 ${iconColorClass}`} />}
                </span>
                {/* Texto alternativo para leitores de tela */}
                <span className="sr-only">Carregando...</span>
            </div>
        </div>
    );
}

PageLoader.propTypes = {
  icon: PropTypes.node,
  color: PropTypes.string,
  className: PropTypes.string,
};

PageLoader.defaultProps = {
  color: 'green-700',
  className: '',
};

export default PageLoader;
