import * as React from "react"

const Alert = React.forwardRef(({ className, variant = "default", ...props }, ref) => {
  const baseClasses = "relative w-full rounded-lg border px-4 py-3 text-sm";
  const variantClasses = {
    default: "bg-white text-gray-900 border-gray-200",
    destructive: "bg-red-50 text-red-900 border-red-200"
  };

  const finalClassName = `${baseClasses} ${variantClasses[variant]} ${className || ''}`;

  return (
    <div
      ref={ref}
      role="alert"
      className={finalClassName}
      {...props}
    />
  );
});
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={`font-medium leading-none tracking-tight mb-1 ${className || ''}`}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`text-sm leading-relaxed ${className || ''}`}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }
