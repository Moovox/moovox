import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { useModalForm } from "../../hooks/useModalForm";
import { vaccineService } from "../../services/vaccineService";
import { validationSchemas } from "../../utils/validation";
import FormField from "../common/FormField";
import FormModal from "../ui/form-modal";

const initialVaccineData = {
  name: "",
  manufacturer: "",
  batchNumber: "",
  expirationDate: "",
  dosage: "",
  description: "",
};

function VaccineEditModalNew({ vaccine, open, onOpenChange, onSuccess }) {
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
      successTitle: "Sucesso",
      successMessage: "Vacina atualizada com sucesso!",
      errorTitle: "Erro ao atualizar vacina",
      resetOnClose: false, // Não resetar automaticamente em modais de edição
    },
  );

  // Atualizar dados do formulário quando a vacina mudar
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
      // Erro já tratado no hook
    }
  };

  return (
    <FormModal
      title="Editar Vacina"
      open={open}
      onOpenChange={onOpenChange}
      onSubmit={onSubmitSuccess}
      loading={loading}
      submitText="Salvar"
      cancelText="Cancelar"
    >
      <div className="flex flex-col gap-4">
        <FormField
          label="Nome"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          placeholder="Digite o nome da vacina"
          required
        />

        <FormField
          label="Fabricante"
          name="manufacturer"
          value={formData.manufacturer}
          onChange={handleChange}
          error={errors.manufacturer}
          placeholder="Digite o nome do fabricante"
          required
        />

        <FormField
          label="Número do Lote"
          name="batchNumber"
          value={formData.batchNumber}
          onChange={handleChange}
          error={errors.batchNumber}
          placeholder="Digite o número do lote"
          required
        />

        <FormField
          label="Data de Expiração"
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
          label="Dosagem"
          name="dosage"
          value={formData.dosage}
          onChange={handleChange}
          error={errors.dosage}
          placeholder="Ex: 2ml, 1 dose"
          required
        />

        <FormField
          label="Descrição"
          name="description"
          type="textarea"
          value={formData.description}
          onChange={handleChange}
          error={errors.description}
          placeholder="Descrição adicional da vacina (opcional)"
          inputProps={{
            rows: 3,
          }}
        />
      </div>
    </FormModal>
  );
}

VaccineEditModalNew.propTypes = {
  vaccine: PropTypes.object,
  open: PropTypes.bool.isRequired,
  onOpenChange: PropTypes.func.isRequired,
  onSuccess: PropTypes.func,
};

export default VaccineEditModalNew;
