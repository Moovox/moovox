import { PlusCircle } from "lucide-react";
import React, { useEffect, useState } from "react";
import { animalService } from "../../services/animalService";
import { validationSchemas } from "../../utils/validation";
import StandardCreateModal from "./templates/StandardCreateModal";

const statusOptions = [
  { value: "healthy", label: "Saudável" },
  { value: "in_treatment", label: "Em Tratamento" },
  { value: "recovering", label: "Recuperando" },
  { value: "sick", label: "Doente" },
];

const animalFields = [
  {
    name: "name",
    label: "Nome (Opcional)",
    type: "text",
    placeholder: "Digite o nome do animal",
    required: false,
  },
  {
    name: "speciesId",
    label: "Espécie",
    type: "select",
    placeholder: "Selecione a espécie",
    required: true,
    options: [], // Será preenchido dinamicamente
  },
  {
    name: "breedId",
    label: "Raça",
    type: "select",
    placeholder: "Selecione a raça",
    required: true,
    options: [], // Será preenchido dinamicamente
  },
  {
    name: "birthDate",
    label: "Data de Nascimento",
    type: "date",
    placeholder: "",
    required: true,
    inputProps: {
      max: new Date().toISOString().split("T")[0],
    },
  },
  {
    name: "weight",
    label: "Peso (kg)",
    type: "number",
    placeholder: "Digite o peso",
    required: true,
    inputProps: {
      min: "0",
      step: "0.1",
    },
  },
  {
    name: "status",
    label: "Status",
    type: "select",
    placeholder: "Selecione o status",
    required: true,
    options: statusOptions,
  },
];

const initialAnimalData = {
  name: "",
  speciesId: "",
  breedId: "",
  birthDate: "",
  weight: "",
  status: "healthy",
};

function AnimalCreateModalStandardized({ onSuccess }) {
  const [fields, setFields] = useState(animalFields);

  useEffect(() => {
    // Carregar espécies quando o componente montar
    const loadSpecies = () => {
      const species = animalService.getSpecies();
      const speciesOptions = species.map((s) => ({
        value: s.id.toString(),
        label: s.name,
      }));

      setFields((prev) =>
        prev.map((field) =>
          field.name === "speciesId"
            ? { ...field, options: speciesOptions }
            : field,
        ),
      );
    };

    loadSpecies();
  }, []);

  const handleSubmit = async (formData) => {
    const animalData = {
      ...formData,
      speciesId: parseInt(formData.speciesId),
      breedId: parseInt(formData.breedId),
      weight: parseFloat(formData.weight),
    };

    return await animalService.createAnimal(animalData);
  };

  // Função para atualizar raças quando espécie mudar
  const updateBreeds = (speciesId) => {
    if (speciesId) {
      const breeds = animalService.getBreedsBySpecies(parseInt(speciesId));
      const breedOptions = breeds.map((b) => ({
        value: b.id.toString(),
        label: b.name,
      }));

      setFields((prev) =>
        prev.map((field) =>
          field.name === "breedId"
            ? { ...field, options: breedOptions }
            : field,
        ),
      );
    } else {
      setFields((prev) =>
        prev.map((field) =>
          field.name === "breedId" ? { ...field, options: [] } : field,
        ),
      );
    }
  };

  // Custom modal com lógica de espécie/raça
  return (
    <StandardCreateModal
      fields={fields}
      initialData={initialAnimalData}
      validationSchema={validationSchemas.animal}
      submitHandler={handleSubmit}
      onSuccess={onSuccess}
      title="Adicionar Novo Animal"
      buttonText="Adicionar Animal"
      options={{
        successMessage: "Animal criado com sucesso!",
        errorTitle: "Erro ao criar animal",
        buttonIcon: PlusCircle,
      }}
      // Hook personalizado para mudança de espécie
      onFieldChange={(name, value) => {
        if (name === "speciesId") {
          updateBreeds(value);
        }
      }}
    />
  );
}

export default AnimalCreateModalStandardized;
