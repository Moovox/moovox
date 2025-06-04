import { Plus } from "lucide-react";
import PropTypes from "prop-types";
import React from "react";
import { useModalForm } from "../../hooks/useModalForm";
import { vaccineService } from "../../services/vaccineService";
import { validationSchemas } from "../../utils/validation";
import FormField from "../common/FormField";
import { Button } from "../ui/button";
import FormModal from "../ui/form-modal";

const initialVaccineData = {
  name: "",
  manufacturer: "",
  batchNumber: "",
  expirationDate: "",
  dosage: "",
  description: "",
};

function VaccineCreateModalNew({ onSuccess }) {
  const {
    open,
    loading,
    formData,
    errors,
    handleChange,
    handleOpenChange,
    handleSubmit,
  } = useModalForm(
    initialVaccineData,
    validationSchemas.vaccine,
    (data) => vaccineService.createVaccine(data),
    {
      successTitle: "Sucesso",
      successMessage: "Vacina criada com sucesso!",
      errorTitle: "Erro ao criar vacina",
    },
  );

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
      title="Adicionar Nova Vacina"
      open={open}
      onOpenChange={handleOpenChange}
      onSubmit={onSubmitSuccess}
      loading={loading}
      submitText="Criar"
      cancelText="Cancelar"
      triggerElement={
        <Button className="bg-amber-600 text-white hover:bg-amber-700">
          <Plus className="mr-1 h-4 w-4" />
          Adicionar Vacina
        </Button>
      }
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

VaccineCreateModalNew.propTypes = {
  onSuccess: PropTypes.func,
};

export default VaccineCreateModalNew;
