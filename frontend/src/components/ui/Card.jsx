import PropTypes from "prop-types";
import React from "react";
import { cn } from "../../lib/utils";

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
 *   children?: React.ReactNode,
 *   tabIndex?: number,
 *   role?: string,
 * }} props
 */
function Card({
  as: Component = "div",
  className = "",
  variant = "default",
  title,
  value,
  icon,
  subtitle,
  extra,
  children,
  tabIndex,
  role,
  ...props
}) {
  // Variantes de cor: rural, terra, palha, verde, alerta, escuro
  const variants = {
    default: "bg-white text-[#3e2c1a] border border-[#e5e0d8]",
    rural: "bg-[#f7f3ee] text-[#3e2c1a] border border-[#bfa77a]",
    terra: "bg-[#a97c50] text-white border border-[#7c5a3a]",
    palha: "bg-[#f9e7c2] text-black border border-[#e5d3b3]",
    verde: "bg-[#4e6b4e] text-white border border-[#2e3d2e]",
    alerta: "bg-[#b94a48] text-white border border-[#7c2f2f]",
    escuro: "bg-[#2d2d2d] text-white border border-[#1a1a1a]",
  };

  const cardClass = cn(
    "rounded-2xl shadow-lg p-3 sm:p-4 overflow-hidden dashboard-card",
    variants[variant] || variants.default,
    className,
  );

  return (
    <Component className={cardClass} tabIndex={tabIndex} role={role} {...props}>
      <div className="flex h-full flex-col">
        {/* Header do card: ícone e título */}
        {(icon || title) && (
          <div className="mb-2 flex items-center gap-2 sm:mb-4 sm:gap-3">
            {icon && <div className="flex-shrink-0">{icon}</div>}
            {title && (
              <h3 className="dashboard-title-adjust card-title truncate font-poppins text-base font-semibold sm:text-lg">
                {title}
              </h3>
            )}
          </div>
        )}

        {/* Valor principal do card */}
        {value !== undefined && (
          <div className="flex flex-grow items-center justify-center">
            <span className="dashboard-value-adjust card-value font-poppins text-2xl font-bold sm:text-3xl">
              {value}
            </span>
          </div>
        )}

        {/* Conteúdo extra ou children */}
        {extra && <div className="card-content mt-2 sm:mt-4">{extra}</div>}
        {children && (
          <div className="card-content mt-2 sm:mt-4">{children}</div>
        )}
      </div>
    </Component>
  );
}

Card.propTypes = {
  as: PropTypes.elementType,
  className: PropTypes.string,
  variant: PropTypes.oneOf([
    "default",
    "rural",
    "terra",
    "palha",
    "verde",
    "alerta",
    "escuro",
  ]),
  title: PropTypes.node,
  value: PropTypes.node,
  icon: PropTypes.node,
  subtitle: PropTypes.node,
  extra: PropTypes.node,
  children: PropTypes.node,
  tabIndex: PropTypes.number,
  role: PropTypes.string,
};

Card.defaultProps = {
  as: "div",
  className: "",
  variant: "default",
};

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col space-y-1 p-3 sm:space-y-1.5 sm:p-6",
      className,
    )}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-xl font-semibold leading-none tracking-tight sm:text-2xl",
      className,
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-xs text-gray-600 sm:text-sm", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("p-3 pt-0 sm:p-6 sm:pt-0", className)}
    {...props}
  />
));
CardContent.displayName = "CardContent";

export { CardContent, CardDescription, CardHeader, CardTitle };
export default Card;
