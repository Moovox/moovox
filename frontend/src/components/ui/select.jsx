import { ChevronDown } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "../../utils/cn";

export const Select = ({
  value,
  onValueChange,
  children,
  disabled = false,
}) => {
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
    if (onValueChange) {
      onValueChange(newValue);
    }
    setIsOpen(false);
  };

  return (
    <div ref={selectRef} className="relative">
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          isOpen: !disabled && isOpen,
          setIsOpen,
          value,
          onValueChange: handleValueChange,
          disabled,
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
  disabled,
  ...props
}) => {
  return (
    <button
      type="button"
      onClick={() => !disabled && setIsOpen(!isOpen)}
      className={cn(
        "flex h-10 w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        disabled && "cursor-not-allowed bg-gray-50",
        className,
      )}
      disabled={disabled}
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
  // Store the children to find the selected text
  const [selectedText, setSelectedText] = useState("");

  // Find the text content from children based on value
  useEffect(() => {
    if (value && children) {
      // Flatten all children to handle nested structures
      const items = React.Children.toArray(children).flat();

      // Find the selected item by value
      const selectedItem = items.find((child) => {
        if (!child || !child.props) return false;
        return (
          child.props.value === value || child.props.value === value.toString()
        );
      });

      if (selectedItem && selectedItem.props && selectedItem.props.children) {
        setSelectedText(selectedItem.props.children);
      } else {
        // Fallback: try to find in parent component or use value directly
        setSelectedText(value);
      }
    } else {
      setSelectedText("");
    }
  }, [value, children]);

  if (value && selectedText) {
    return <span className="text-gray-900">{selectedText}</span>;
  }
  return <span className="text-gray-500">{placeholder}</span>;
};

export const SelectContent = ({
  children,
  isOpen,
  onValueChange,
  className,
  value,
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
        React.cloneElement(child, { onValueChange, selectedValue: value }),
      )}
    </div>
  );
};

export const SelectItem = ({
  value,
  children,
  onValueChange,
  selectedValue,
  className,
  ...props
}) => {
  const isSelected = selectedValue === value;

  return (
    <div
      onClick={() => onValueChange && onValueChange(value)}
      className={cn(
        "relative flex cursor-pointer items-center px-3 py-2 text-sm hover:bg-gray-100 focus:bg-gray-100",
        isSelected && "bg-blue-50 font-medium text-blue-700",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
