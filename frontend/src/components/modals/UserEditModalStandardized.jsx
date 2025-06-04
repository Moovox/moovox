import React from "react";
import { userService } from "../../services/userService";
import StandardEditModal from "./templates/StandardEditModal";

const userTypeOptions = [
  { value: "Administrator", label: "Administrador" },
  { value: "Farmer", label: "Fazendeiro" },
  { value: "Farmhand", label: "Funcionário" },
  { value: "Veterinarian", label: "Veterinário" },
];

const roleMapping = {
  ADMIN: "Administrator",
  FARMER: "Farmer",
  FARMHAND: "Farmhand",
  VETERINARY: "Veterinarian",
};

const userFields = [
  {
    name: "name",
    label: "Nome",
    type: "text",
    placeholder: "Digite o nome completo",
    required: true,
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Digite o email",
    required: true,
  },
  {
    name: "userType",
    label: "Tipo de Usuário",
    type: "select",
    placeholder: "Selecione o tipo de usuário",
    required: true,
    options: userTypeOptions,
  },
];

const initialUserData = {
  name: "",
  email: "",
  userType: "",
};

// Esquema de validação para edição (sem senha obrigatória)
const userEditValidation = (data) => {
  const errors = {};

  if (!data.name?.trim()) {
    errors.name = "Nome é obrigatório";
  }

  if (!data.email?.trim()) {
    errors.email = "Email é obrigatório";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Email inválido";
  }

  if (!data.userType) {
    errors.userType = "Tipo de usuário é obrigatório";
  }

  return errors;
};

function UserEditModalStandardized({ user, open, onOpenChange, onSuccess }) {
  const handleSubmit = async (userId, formData) => {
    const userData = {
      name: formData.name,
      email: formData.email,
      role: {
        Administrator: "ADMIN",
        Farmer: "FARMER",
        Farmhand: "FARMHAND",
        Veterinarian: "VETERINARY",
      }[formData.userType],
    };

    return await userService.updateUser(userId, userData);
  };

  const mapUserToFormData = (user) => ({
    name: user.name || "",
    email: user.email || "",
    userType: roleMapping[user.role] || "",
  });

  return (
    <StandardEditModal
      fields={userFields}
      initialData={initialUserData}
      validationSchema={userEditValidation}
      submitHandler={handleSubmit}
      onSuccess={onSuccess}
      item={user}
      open={open}
      onOpenChange={onOpenChange}
      title="Editar Usuário"
      mapItemToFormData={mapUserToFormData}
      options={{
        successMessage: "Usuário atualizado com sucesso!",
        errorTitle: "Erro ao atualizar usuário",
      }}
    />
  );
}

export default UserEditModalStandardized;
