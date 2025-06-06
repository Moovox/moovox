import { Plus } from "lucide-react";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useModalForm } from "../../../../hooks/useModalForm";
import { vaccineService } from "../../../../services/vaccineService";
import { validationSchemas } from "../../../../utils/validation";
import FormField from "../../../common/FormField";
import { Button } from "../../../ui/button";
import FormModal from "../../../ui/form-modal";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../ui/select";

const initialBatchData = {
  baseVaccineId: "",
  batchNumber: "",
  expirationDate: "",
  notes: "",
};

function VaccineCreateModal({ onSuccess }) {
  const [vaccines, setVaccines] = useState([]);
  const [selectedVaccine, setSelectedVaccine] = useState(null);
  const [vaccinesLoading, setVaccinesLoading] = useState(false);

  const {
    open,
    loading,
    formData,
    errors,
    handleChange,
    handleOpenChange,
    handleSubmit,
  } = useModalForm(
    initialBatchData,
    validationSchemas.vaccineBatch,
    async (data) => {
      // Create a new batch based on an existing vaccine
      const baseVaccine = vaccines.find(
        (v) => v.id.toString() === data.baseVaccineId,
      );

      const formattedData = {
        name: baseVaccine.name,
        target_disease: baseVaccine.target_disease,
        manufacturer_id:
          baseVaccine.manufacturer_id || baseVaccine.manufacturer?.id,
        type_of_vaccine_id:
          baseVaccine.type_of_vaccine_id || baseVaccine.type_of_vaccine?.id,
        batch: data.batchNumber,
        expiration_date: data.expirationDate,
        required_doses: baseVaccine.required_doses,
        dosing_interval: baseVaccine.dosing_interval || 0,
        notes: data.notes || baseVaccine.notes || "",
      };

      return vaccineService.createVaccine(formattedData);
    },
    {
      successTitle: "Sucesso",
      successMessage: "Novo lote adicionado com sucesso!",
      errorTitle: "Erro ao adicionar lote",
    },
  );

  // Load vaccines when modal opens
  const handleModalOpen = async (isOpen) => {
    handleOpenChange(isOpen);
    if (isOpen && vaccines.length === 0) {
      try {
        setVaccinesLoading(true);
        const response = await vaccineService.getAllVaccines();
        setVaccines(response.data || []);
      } catch (error) {
        console.error("Error loading vaccines:", error);
      } finally {
        setVaccinesLoading(false);
      }
    }
  };

  const handleVaccineSelect = (vaccineId) => {
    const vaccine = vaccines.find((v) => v.id.toString() === vaccineId);
    console.log("Vacina selecionada:", vaccine); // Debug temporário
    setSelectedVaccine(vaccine);
    handleChange({ target: { name: "baseVaccineId", value: vaccineId } });
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

  const formatManufacturer = (manufacturer) => {
    if (typeof manufacturer === "string") return manufacturer;
    return manufacturer?.name || "Fabricante não informado";
  };

  const formatVaccineType = (type) => {
    if (typeof type === "string") return type;
    return type?.name || "Tipo não informado";
  };

  const formatExpirationDate = (date) => {
    if (!date) return "N/A";
    try {
      const dateObj = new Date(date);
      if (isNaN(dateObj.getTime())) return "Data inválida";
      return dateObj.toLocaleDateString("pt-BR");
    } catch (error) {
      return "Data inválida";
    }
  };

  return (
    <FormModal
      title="Adicionar Novo Lote"
      open={open}
      onOpenChange={handleModalOpen}
      onSubmit={onSubmitSuccess}
      loading={loading || vaccinesLoading}
      submitText="Adicionar Lote"
      cancelText="Cancelar"
      triggerElement={
        <Button className="bg-amber-600 text-white hover:bg-amber-700">
          <Plus className="mr-1 h-4 w-4" />
          Novo Lote
        </Button>
      }
    >
      <div className="flex flex-col gap-4">
        {/* Vaccine Selection */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Selecionar Vacina Base <span className="text-red-500">*</span>
          </label>
          <Select
            value={formData.baseVaccineId}
            onValueChange={handleVaccineSelect}
          >
            <SelectTrigger>
              <SelectValue placeholder="Selecione a vacina para criar novo lote" />
            </SelectTrigger>
            <SelectContent>
              {vaccines.map((vaccine) => (
                <SelectItem key={vaccine.id} value={vaccine.id.toString()}>
                  <div className="flex flex-col">
                    <span className="font-medium">{vaccine.name}</span>
                    <span className="text-sm text-gray-500">
                      {vaccine.target_disease || "Doença não informada"} •{" "}
                      {formatManufacturer(vaccine.manufacturer)}
                    </span>
                    <span className="text-xs text-gray-400">
                      Lote: {vaccine.batch || "N/A"} • Vence:{" "}
                      {formatExpirationDate(vaccine.expiration_date)} •{" "}
                      {vaccine.required_doses || "?"} dose(s)
                    </span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.baseVaccineId && (
            <p className="mt-1 text-sm text-red-600">{errors.baseVaccineId}</p>
          )}
        </div>

        {/* Vaccine Information Display */}
        {selectedVaccine && (
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <h4 className="mb-3 font-medium text-gray-900">
              Informações da Vacina Base
            </h4>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <span className="font-medium text-gray-700">Nome:</span>
                <p className="text-gray-600">{selectedVaccine.name}</p>
              </div>
              <div>
                <span className="font-medium text-gray-700">Doença Alvo:</span>
                <p className="text-gray-600">
                  {selectedVaccine.target_disease || "Não informado"}
                </p>
              </div>
              <div>
                <span className="font-medium text-gray-700">Fabricante:</span>
                <p className="text-gray-600">
                  {formatManufacturer(selectedVaccine.manufacturer)}
                </p>
              </div>
              <div>
                <span className="font-medium text-gray-700">Tipo:</span>
                <p className="text-gray-600">
                  {formatVaccineType(selectedVaccine.type_of_vaccine)}
                </p>
              </div>
              <div>
                <span className="font-medium text-gray-700">
                  Doses Necessárias:
                </span>
                <p className="text-gray-600">
                  {selectedVaccine.required_doses || "Não informado"}
                </p>
              </div>
              {selectedVaccine.dosing_interval > 0 && (
                <div>
                  <span className="font-medium text-gray-700">
                    Intervalo entre Doses:
                  </span>
                  <p className="text-gray-600">
                    {selectedVaccine.dosing_interval} dias
                  </p>
                </div>
              )}
              <div className="col-span-2">
                <span className="font-medium text-gray-700">Lote Atual:</span>
                <p className="text-gray-600">
                  {selectedVaccine.batch || "Não informado"} (vence em{" "}
                  {formatExpirationDate(selectedVaccine.expiration_date)})
                </p>
              </div>
              {selectedVaccine.notes && (
                <div className="col-span-2">
                  <span className="font-medium text-gray-700">
                    Observações:
                  </span>
                  <p className="text-xs italic text-gray-600">
                    {selectedVaccine.notes}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        <FormField
          label="Número do Novo Lote"
          name="batchNumber"
          value={formData.batchNumber}
          onChange={handleChange}
          error={errors.batchNumber}
          placeholder="Digite o número do novo lote"
          required
        />

        <FormField
          label="Data de Expiração do Novo Lote"
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
          label="Observações do Lote"
          name="notes"
          type="textarea"
          value={formData.notes}
          onChange={handleChange}
          error={errors.notes}
          placeholder="Observações específicas deste lote (opcional)"
          inputProps={{
            rows: 3,
          }}
        />
      </div>
    </FormModal>
  );
}

VaccineCreateModal.propTypes = {
  onSuccess: PropTypes.func,
};

export default VaccineCreateModal;
