import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { useModalForm } from "../../../hooks/useModalForm";
import FormField from "../../common/FormField";
import FormModal from "../../ui/form-modal";

/**
 * Standard template for edit modals
 * @param {Object} props
 * @param {Array} props.fields - Form field configuration
 * @param {Object} props.initialData - Initial form data
 * @param {Function} props.validationSchema - Validation schema
 * @param {Function} props.submitHandler - Submit function
 * @param {Function} props.onSuccess - Success callback
 * @param {Object} props.item - Item being edited
 * @param {boolean} props.open - Whether the modal is open
 * @param {Function} props.onOpenChange - Function to control opening/closing
 * @param {string} props.title - Modal title
 * @param {Function} props.mapItemToFormData - Function to map item to form data
 * @param {Object} props.options - Additional options
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
  title = "Edit Item",
  mapItemToFormData,
  options = {},
}) {
  const {
    successTitle = "Success",
    successMessage = "Item updated successfully!",
    errorTitle = "Error updating item",
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
      resetOnClose: false, // Don't reset automatically in edit modals
    },
  );

  // Update form data when item changes
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
      // Error already handled in hook
    }
  };

  return (
    <FormModal
      title={title}
      open={open}
      onOpenChange={onOpenChange}
      onSubmit={onSubmitSuccess}
      loading={loading}
      submitText="Save"
      cancelText="Cancel"
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
