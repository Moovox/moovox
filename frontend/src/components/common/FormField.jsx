import React from "react";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";

/**
 * Componente de campo de formulário reutilizável
 * @param {Object} props
 * @param {string} props.label - Rótulo do campo
 * @param {string} props.name - Nome do campo
 * @param {string} props.type - Tipo do campo (text, email, password, date, select, textarea)
 * @param {string} props.value - Valor atual do campo
 * @param {Function} props.onChange - Função para mudanças no campo
 * @param {Function} props.onSelectChange - Função para mudanças em selects
 * @param {string} props.error - Mensagem de erro
 * @param {string} props.placeholder - Placeholder do campo
 * @param {boolean} props.required - Se o campo é obrigatório
 * @param {Array} props.options - Opções para select (formato: [{value, label}])
 * @param {Object} props.inputProps - Props adicionais para o input
 * @param {string} props.className - Classes CSS adicionais
 */
function FormField({
  label,
  name,
  type = "text",
  value,
  onChange,
  onSelectChange,
  error,
  placeholder,
  required = false,
  options = [],
  inputProps = {},
  className = "",
}) {
  const fieldId = `field-${name}`;
  const hasError = !!error;

  const baseClasses = `${hasError ? "border-red-500" : "border-amber-200"} ${className}`;

  const renderInput = () => {
    switch (type) {
      case "select":
        return (
          <Select
            value={value}
            onValueChange={(val) => onSelectChange?.(name, val)}
          >
            <SelectTrigger className={baseClasses}>
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );

      case "textarea":
        return (
          <Textarea
            id={fieldId}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            className={baseClasses}
            {...inputProps}
          />
        );

      default:
        return (
          <Input
            id={fieldId}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            className={baseClasses}
            {...inputProps}
          />
        );
    }
  };

  return (
    <div className="space-y-1.5">
      <label htmlFor={fieldId} className="text-sm font-medium text-amber-900">
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>
      {renderInput()}
      {hasError && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
}

export default FormField;
