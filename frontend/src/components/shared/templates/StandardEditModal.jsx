import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { useModalForm } from "../../../hooks/useModalForm";
import FormField from "../../common/FormField";
import FormModal from "../../ui/form-modal";

/**
 * Template padrão para modais de edição
 * @param {Object} props
 * @param {Array} props.fields - Configuração dos campos do formulário
 * @param {Object} props.initialData - Dados iniciais do formulário
 * @param {Function} props.validationSchema - Esquema de validação
 * @param {Function} props.submitHandler - Função de submit
 * @param {Function} props.onSuccess - Callback de sucesso
 * @param {Object} props.item - Item sendo editado
 * @param {boolean} props.open - Se o modal está aberto
 * @param {Function} props.onOpenChange - Função para controlar abertura/fechamento
 * @param {string} props.title - Título do modal
 * @param {Function} props.mapItemToFormData - Função para mapear item para dados do formulário
 * @param {Object} props.options - Opções adicionais
 */
function StandardEditModal({
  fields = [],
  initialData = {},
  validationSchema,
  submitHandler,
  onSuccess,
  item,
  open,
  onOpenChange,
  title = "Editar Item",
  mapItemToFormData,
  options = {},
}) {
  const {
    successTitle = "Sucesso",
    successMessage = "Item atualizado com sucesso!",
    errorTitle = "Erro ao atualizar item",
  } = options;

  const {
    loading,
    formData,
    errors,
    handleChange,
    handleSelectChange,
    handleSubmit,
    updateFormData,
  } = useModalForm(
    initialData,
    validationSchema,
    (data) => submitHandler(item?.id, data),
    {
      successTitle,
      successMessage,
      errorTitle,
      resetOnClose: false, // Não resetar automaticamente em modais de edição
    },
  );

  // Atualizar dados do formulário quando o item mudar
  useEffect(() => {
    if (item && open) {
      const mappedData = mapItemToFormData ? mapItemToFormData(item) : item;
      updateFormData(mappedData);
    }
  }, [item, open, updateFormData, mapItemToFormData]);

  const onSubmitSuccess = async (e) => {
    try {
      await handleSubmit(e);
      if (onOpenChange) {
        onOpenChange(false);
      }
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
      onOpenChange={onOpenChange}
      onSubmit={onSubmitSuccess}
      loading={loading}
      submitText="Salvar"
      cancelText="Cancelar"
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
            onSelectChange={handleSelectChange}
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

StandardEditModal.propTypes = {
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
  item: PropTypes.object,
  open: PropTypes.bool.isRequired,
  onOpenChange: PropTypes.func.isRequired,
  title: PropTypes.string,
  mapItemToFormData: PropTypes.func,
  options: PropTypes.object,
};

export default StandardEditModal;
