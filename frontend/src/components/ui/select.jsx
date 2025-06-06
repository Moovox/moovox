import { ChevronDown } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "../../utils/cn";

export const Select = ({ value, onValueChange, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleValueChange = (newValue) => {
    onValueChange(newValue);
    setIsOpen(false);
  };

  return (
    <div ref={selectRef} className="relative">
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          isOpen,
          setIsOpen,
          value,
          onValueChange: handleValueChange,
        }),
      )}
    </div>
  );
};

export const SelectTrigger = ({
  className,
  children,
  isOpen,
  setIsOpen,
  value,
  ...props
}) => {
  return (
    <button
      type="button"
      onClick={() => setIsOpen(!isOpen)}
      className={cn(
        "flex h-10 w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDown
        className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")}
      />
    </button>
  );
};

export const SelectValue = ({ placeholder, value, children }) => {
  if (value) {
    // Find the selected item's display text
    return <span>{value}</span>;
  }
  return <span className="text-gray-500">{placeholder}</span>;
};

export const SelectContent = ({
  children,
  isOpen,
  onValueChange,
  className,
  ...props
}) => {
  if (!isOpen) return null;

  return (
    <div
      className={cn(
        "absolute top-full z-50 mt-1 max-h-60 w-full overflow-auto rounded-md border border-gray-200 bg-white py-1 shadow-lg",
        className,
      )}
      {...props}
    >
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { onValueChange }),
      )}
    </div>
  );
};

export const SelectItem = ({
  value,
  children,
  onValueChange,
  className,
  ...props
}) => {
  return (
    <div
      onClick={() => onValueChange(value)}
      className={cn(
        "relative flex cursor-pointer items-center px-3 py-2 text-sm hover:bg-gray-100 focus:bg-gray-100",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
