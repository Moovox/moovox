import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { useModalForm } from "../../../../hooks/useModalForm";
import { vaccineService } from "../../../../services/vaccineService";
import { validationSchemas } from "../../../../utils/validation";
import FormField from "../../../common/FormField";
import FormModal from "../../../ui/form-modal";

const initialVaccineData = {
  name: "",
  manufacturer: "",
  batchNumber: "",
  expirationDate: "",
  dosage: "",
  description: "",
};

function VaccineEditModal({ vaccine, open, onOpenChange, onSuccess }) {
  const {
    loading,
    formData,
    errors,
    handleChange,
    handleSubmit,
    updateFormData,
  } = useModalForm(
    initialVaccineData,
    validationSchemas.vaccine,
    (data) => vaccineService.updateVaccine(vaccine?.id, data),
    {
      successTitle: "Success",
      successMessage: "Vaccine updated successfully!",
      errorTitle: "Error updating vaccine",
      resetOnClose: false, // Don't reset automatically on edit modals
    },
  );

  // Update form data when vaccine changes
  useEffect(() => {
    if (vaccine && open) {
      updateFormData({
        name: vaccine.name || "",
        manufacturer: vaccine.manufacturer || "",
        batchNumber: vaccine.batchNumber || "",
        expirationDate: vaccine.expirationDate
          ? new Date(vaccine.expirationDate).toISOString().split("T")[0]
          : "",
        dosage: vaccine.dosage || "",
        description: vaccine.description || "",
      });
    }
  }, [vaccine, open, updateFormData]);

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
      title="Edit Vaccine"
      open={open}
      onOpenChange={onOpenChange}
      onSubmit={onSubmitSuccess}
      loading={loading}
      submitText="Save"
      cancelText="Cancel"
    >
      <div className="flex flex-col gap-4">
        <FormField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          placeholder="Enter the vaccine name"
          required
        />

        <FormField
          label="Manufacturer"
          name="manufacturer"
          value={formData.manufacturer}
          onChange={handleChange}
          error={errors.manufacturer}
          placeholder="Enter the manufacturer name"
          required
        />

        <FormField
          label="Batch Number"
          name="batchNumber"
          value={formData.batchNumber}
          onChange={handleChange}
          error={errors.batchNumber}
          placeholder="Enter the batch number"
          required
        />

        <FormField
          label="Expiration Date"
          name="expirationDate"
          type="date"
          value={formData.expirationDate}
          onChange={handleChange}
          error={errors.expirationDate}
          required
          inputProps={{
            min: new Date().toISOString().split("T")[0],
          }}
        />

        <FormField
          label="Dosage"
          name="dosage"
          value={formData.dosage}
          onChange={handleChange}
          error={errors.dosage}
          placeholder="Ex: 2ml, 1 dose"
          required
        />

        <FormField
          label="Description"
          name="description"
          type="textarea"
          value={formData.description}
          onChange={handleChange}
          error={errors.description}
          placeholder="Additional vaccine description (optional)"
          inputProps={{
            rows: 3,
          }}
        />
      </div>
    </FormModal>
  );
}

VaccineEditModal.propTypes = {
  vaccine: PropTypes.object,
  open: PropTypes.bool.isRequired,
  onOpenChange: PropTypes.func.isRequired,
  onSuccess: PropTypes.func,
};

export default VaccineEditModal;
