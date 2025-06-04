import { UserPlus } from "lucide-react";
import React from "react";
import { userService } from "../../services/userService";
import { validationSchemas } from "../../utils/validation";
import StandardCreateModal from "./templates/StandardCreateModal";

const userTypeOptions = [
  { value: "Administrator", label: "Administrador" },
  { value: "Farmer", label: "Fazendeiro" },
  { value: "Farmhand", label: "Funcionário" },
  { value: "Veterinarian", label: "Veterinário" },
];

const roleMapping = {
  Administrator: "ADMIN",
  Farmer: "FARMER",
  Farmhand: "FARMHAND",
  Veterinarian: "VETERINARY",
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
  {
    name: "password",
    label: "Senha",
    type: "password",
    placeholder: "Digite a senha",
    required: true,
  },
  {
    name: "confirmPassword",
    label: "Confirmar Senha",
    type: "password",
    placeholder: "Confirme a senha",
    required: true,
  },
];

const initialUserData = {
  name: "",
  email: "",
  userType: "",
  password: "",
  confirmPassword: "",
};

function UserCreateModalStandardized({ onSuccess }) {
  const handleSubmit = async (formData) => {
    // TODO: Implementar validação de fazenda selecionada
    const userData = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      role: roleMapping[formData.userType],
      farmId: 1, // TODO: Obter do contexto de fazenda
    };

    return await userService.createUser(userData);
  };

  return (
    <StandardCreateModal
      fields={userFields}
      initialData={initialUserData}
      validationSchema={validationSchemas.user}
      submitHandler={handleSubmit}
      onSuccess={onSuccess}
      title="Criar Novo Usuário"
      buttonText="Adicionar Usuário"
      options={{
        successMessage: "Usuário criado com sucesso!",
        errorTitle: "Erro ao criar usuário",
        buttonIcon: UserPlus,
      }}
    />
  );
}

export default UserCreateModalStandardized;
