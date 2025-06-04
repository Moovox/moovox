import { useCallback, useState } from "react";
import { useToast } from "../components/ui/use-toast";

/**
 * Hook personalizado para gerenciar formulários em modais
 * @param {Object} initialData - Dados iniciais do formulário
 * @param {Function} validationSchema - Função de validação que retorna objeto de erros
 * @param {Function} submitHandler - Função para submeter o formulário
 * @param {Object} options - Opções adicionais
 */
export function useModalForm(
  initialData = {},
  validationSchema,
  submitHandler,
  options = {},
) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const { toast } = useToast();

  const {
    successTitle = "Sucesso",
    successMessage = "Operação realizada com sucesso!",
    errorTitle = "Erro",
    resetOnClose = true,
  } = options;

  // Resetar formulário
  const resetForm = useCallback(() => {
    setFormData(initialData);
    setErrors({});
  }, [initialData]);

  // Validar formulário
  const validateForm = useCallback(() => {
    if (!validationSchema) return true;

    const newErrors = validationSchema(formData);
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData, validationSchema]);

  // Manipular mudanças nos campos
  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));

      // Limpar erro quando usuário começar a digitar
      if (errors[name]) {
        setErrors((prev) => ({
          ...prev,
          [name]: "",
        }));
      }
    },
    [errors],
  );

  // Manipular mudanças em selects
  const handleSelectChange = useCallback(
    (name, value) => {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));

      if (errors[name]) {
        setErrors((prev) => ({
          ...prev,
          [name]: "",
        }));
      }
    },
    [errors],
  );

  // Manipular abertura/fechamento do modal
  const handleOpenChange = useCallback(
    (newOpen) => {
      setOpen(newOpen);
      if (!newOpen && resetOnClose) {
        resetForm();
      }
    },
    [resetOnClose, resetForm],
  );

  // Manipular submit do formulário
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      if (!validateForm()) {
        return;
      }

      setLoading(true);
      try {
        const result = await submitHandler(formData);

        toast({
          title: successTitle,
          description: successMessage,
          variant: "success",
        });

        handleOpenChange(false);
        return result;
      } catch (error) {
        console.error("Erro no formulário:", error);

        toast({
          title: errorTitle,
          description: error.message || "Ocorreu um erro inesperado",
          variant: "destructive",
        });
        throw error;
      } finally {
        setLoading(false);
      }
    },
    [
      formData,
      validateForm,
      submitHandler,
      successTitle,
      successMessage,
      errorTitle,
      toast,
      handleOpenChange,
    ],
  );

  // Atualizar dados do formulário (útil para modais de edição)
  const updateFormData = useCallback((newData) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  }, []);

  return {
    // Estado
    open,
    loading,
    formData,
    errors,

    // Ações
    setOpen,
    resetForm,
    handleChange,
    handleSelectChange,
    handleOpenChange,
    handleSubmit,
    updateFormData,

    // Utilitários
    validateForm,
  };
}
