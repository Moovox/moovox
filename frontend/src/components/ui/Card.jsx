import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

/**
 * Card visual reutilizável
 * @param {{ as?: React.ElementType, className?: string, children?: React.ReactNode, variant?: string }} props
 */
function Card({ as: Component = 'div', className = '', children, variant = 'default', tabIndex, role, ...props }) {
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
      <div className="relative z-10">{children}</div>
    </Component>
  );
}

Card.propTypes = {
  as: PropTypes.elementType,
  className: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.oneOf(['default', 'rural', 'terra', 'palha', 'verde', 'alerta', 'escuro']),
  tabIndex: PropTypes.number,
  role: PropTypes.string,
};

Card.defaultProps = {
  as: 'div',
  className: '',
  variant: 'default',
};

export default Card;
