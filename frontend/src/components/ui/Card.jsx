import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

/**
 * Card visual reutilizável e padronizado para dashboard
 * @param {{
 *   as?: React.ElementType,
 *   className?: string,
 *   variant?: string,
 *   title?: React.ReactNode,
 *   value?: React.ReactNode,
 *   icon?: React.ReactNode,
 *   subtitle?: React.ReactNode,
 *   extra?: React.ReactNode,
 *   tabIndex?: number,
 *   role?: string,
 * }} props
 */
function Card({
  as: Component = 'div',
  className = '',
  variant = 'default',
  title,
  value,
  icon,
  subtitle,
  extra,
  tabIndex,
  role,
  ...props
}) {
  // Variantes de cor: rural, terra, palha, verde, alerta, escuro
  const variants = {
    default: 'bg-white text-[#3e2c1a] border border-[#e5e0d8]',
    rural: 'bg-[#f7f3ee] text-[#3e2c1a] border border-[#bfa77a]',
    terra: 'bg-[#a97c50] text-white border border-[#7c5a3a]',
    palha: 'bg-[#f9e7c2] text-[#7c5a3a] border border-[#e5d3b3]',
    verde: 'bg-[#4e6b4e] text-white border border-[#2e3d2e]',
    alerta: 'bg-[#b94a48] text-white border border-[#7c2f2f]',
    escuro: 'bg-[#2d2d2d] text-white border border-[#1a1a1a]',
  };
  return (
    <Component
      className={cn(
        'rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.025]',
        variants[variant] || variants.default,
        className,
        'group relative overflow-hidden'
      )}
      tabIndex={tabIndex}
      role={role}
      {...props}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br from-[#bfa77a] via-[#f9e7c2] to-[#a97c50] pointer-events-none" />
      <div className="relative z-10 flex flex-col justify-between h-full min-h-[100px]">
        {(icon || title) && (
          <div className="flex items-center gap-2 mb-2">
            {icon && <span className="w-6 h-6 flex items-center justify-center">{icon}</span>}
            {title && <span className="font-poppins font-semibold text-base md:text-lg">{title}</span>}
          </div>
        )}
        {subtitle && <div className="mb-1 text-sm text-[#a97c50] font-poppins">{subtitle}</div>}
        {value && <span className="font-poppins font-bold text-xl md:text-2xl">{value}</span>}
        {extra && <div className="mt-2">{extra}</div>}
      </div>
    </Component>
  );
}

Card.propTypes = {
  as: PropTypes.elementType,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'rural', 'terra', 'palha', 'verde', 'alerta', 'escuro']),
  title: PropTypes.node,
  value: PropTypes.node,
  icon: PropTypes.node,
  subtitle: PropTypes.node,
  extra: PropTypes.node,
  tabIndex: PropTypes.number,
  role: PropTypes.string,
};

Card.defaultProps = {
  as: 'div',
  className: '',
  variant: 'default',
};

export default Card;
