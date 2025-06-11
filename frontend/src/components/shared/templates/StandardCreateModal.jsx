import { Plus } from "lucide-react";
import PropTypes from "prop-types";
import React from "react";
import { useModalForm } from "../../../hooks/useModalForm";
import FormField from "../../common/FormField";
import { Button } from "../../ui/button";
import FormModal from "../../ui/form-modal";

/**
 * Template padrão para modais de criação
 * @param {Object} props
 * @param {Array} props.fields - Configuração dos campos do formulário
 * @param {Object} props.initialData - Dados iniciais do formulário
 * @param {Function} props.validationSchema - Esquema de validação
 * @param {Function} props.submitHandler - Função de submit
 * @param {Function} props.onSuccess - Callback de sucesso
 * @param {string} props.title - Título do modal
 * @param {string} props.buttonText - Texto do botão trigger
 * @param {Function} props.onFieldChange - Callback para mudanças em campos específicos
 * @param {Object} props.options - Opções adicionais
 */
function StandardCreateModal({
  fields = [],
  initialData = {},
  validationSchema,
  submitHandler,
  onSuccess,
  title = "Create Item",
  buttonText = "Add",
  onFieldChange,
  options = {},
}) {
  const {
    successTitle = "Success",
    successMessage = "Item created successfully!",
    errorTitle = "Error creating item",
    buttonIcon: ButtonIcon = Plus,
    buttonClassName = "bg-amber-600 text-white hover:bg-amber-700",
  } = options;

  const {
    open,
    loading,
    formData,
    errors,
    handleChange,
    handleSelectChange,
    handleOpenChange,
    handleSubmit,
  } = useModalForm(initialData, validationSchema, submitHandler, {
    successTitle,
    successMessage,
    errorTitle,
  });

  // Wrapper para handleSelectChange com callback personalizado
  const handleSelectChangeWithCallback = (name, value) => {
    handleSelectChange(name, value);
    if (onFieldChange) {
      onFieldChange(name, value);
    }
  };

  const onSubmitSuccess = async (e) => {
    try {
      await handleSubmit(e);
      if (onSuccess) {
        await onSuccess();
      }
    } catch (error) {
      // Erro já tratado no hook
    }
  };

  return (
    <FormModal
      title={title}
      open={open}
      onOpenChange={handleOpenChange}
      onSubmit={onSubmitSuccess}
      loading={loading}
      submitText="Create"
      cancelText="Cancel"
      triggerElement={
        <Button className={buttonClassName}>
          <ButtonIcon className="mr-1 h-4 w-4" />
          {buttonText}
        </Button>
      }
    >
      <div className="flex flex-col gap-4">
        {fields.map((field) => (
          <FormField
            key={field.name}
            label={field.label}
            name={field.name}
            type={field.type}
            value={formData[field.name] || ""}
            onChange={handleChange}
            onSelectChange={
              field.type === "select"
                ? handleSelectChangeWithCallback
                : handleSelectChange
            }
            error={errors[field.name]}
            placeholder={field.placeholder}
            required={field.required}
            options={field.options}
            inputProps={field.inputProps}
          />
        ))}
      </div>
    </FormModal>
  );
}

StandardCreateModal.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      type: PropTypes.string,
      placeholder: PropTypes.string,
      required: PropTypes.bool,
      options: PropTypes.array,
      inputProps: PropTypes.object,
    }),
  ).isRequired,
  initialData: PropTypes.object,
  validationSchema: PropTypes.func,
  submitHandler: PropTypes.func.isRequired,
  onSuccess: PropTypes.func,
  title: PropTypes.string,
  buttonText: PropTypes.string,
  onFieldChange: PropTypes.func,
  options: PropTypes.object,
};

export default StandardCreateModal;
