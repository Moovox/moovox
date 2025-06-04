/**
 * Utilitários de validação para formulários
 */

// Validações básicas
export const validators = {
  required: (value, message = "Campo obrigatório") => {
    return !value?.trim() ? message : null;
  },

  email: (value, message = "Email inválido") => {
    const emailRegex = /\S+@\S+\.\S+/;
    return value && !emailRegex.test(value) ? message : null;
  },

  minLength: (min, message) => (value) => {
    return value && value.length < min
      ? message || `Mínimo ${min} caracteres`
      : null;
  },

  maxLength: (max, message) => (value) => {
    return value && value.length > max
      ? message || `Máximo ${max} caracteres`
      : null;
  },

  positiveNumber: (value, message = "Deve ser um número positivo") => {
    return value && (isNaN(parseFloat(value)) || parseFloat(value) <= 0)
      ? message
      : null;
  },

  pastDate: (value, message = "Data não pode ser no futuro") => {
    if (!value) return null;
    const inputDate = new Date(value);
    const today = new Date();
    return inputDate > today ? message : null;
  },

  futureDate: (value, message = "Data não pode ser no passado") => {
    if (!value) return null;
    const inputDate = new Date(value);
    const today = new Date();
    return inputDate < today ? message : null;
  },

  match: (otherValue, message) => (value) => {
    return value !== otherValue ? message || "Valores não conferem" : null;
  },
};

// Função para combinar múltiplas validações
export const combineValidators =
  (...validatorFunctions) =>
  (value) => {
    for (const validator of validatorFunctions) {
      const error = validator(value);
      if (error) return error;
    }
    return null;
  };

// Esquemas de validação específicos
export const validationSchemas = {
  // Validação para vacinas
  vaccine: (data) => {
    const errors = {};

    const nameError = validators.required(data.name, "Nome é obrigatório");
    if (nameError) errors.name = nameError;

    const manufacturerError = validators.required(
      data.manufacturer,
      "Fabricante é obrigatório",
    );
    if (manufacturerError) errors.manufacturer = manufacturerError;

    const batchError = validators.required(
      data.batchNumber,
      "Número do lote é obrigatório",
    );
    if (batchError) errors.batchNumber = batchError;

    const expirationError =
      validators.required(
        data.expirationDate,
        "Data de expiração é obrigatória",
      ) ||
      validators.futureDate(
        data.expirationDate,
        "Data de expiração não pode ser no passado",
      );
    if (expirationError) errors.expirationDate = expirationError;

    const dosageError = validators.required(
      data.dosage,
      "Dosagem é obrigatória",
    );
    if (dosageError) errors.dosage = dosageError;

    return errors;
  },

  // Validação para usuários
  user: (data) => {
    const errors = {};

    const nameError = validators.required(data.name, "Nome é obrigatório");
    if (nameError) errors.name = nameError;

    const emailError =
      validators.required(data.email, "Email é obrigatório") ||
      validators.email(data.email);
    if (emailError) errors.email = emailError;

    const userTypeError = validators.required(
      data.userType,
      "Tipo de usuário é obrigatório",
    );
    if (userTypeError) errors.userType = userTypeError;

    if (data.password !== undefined) {
      const passwordError =
        validators.required(data.password, "Senha é obrigatória") ||
        validators.minLength(
          6,
          "Senha deve ter pelo menos 6 caracteres",
        )(data.password);
      if (passwordError) errors.password = passwordError;

      if (data.confirmPassword !== undefined) {
        const confirmError = validators.match(
          data.password,
          "Senhas não conferem",
        )(data.confirmPassword);
        if (confirmError) errors.confirmPassword = confirmError;
      }
    }

    return errors;
  },

  // Validação para animais
  animal: (data) => {
    const errors = {};

    const speciesError = validators.required(
      data.speciesId,
      "Espécie é obrigatória",
    );
    if (speciesError) errors.speciesId = speciesError;

    const breedError = validators.required(data.breedId, "Raça é obrigatória");
    if (breedError) errors.breedId = breedError;

    const birthDateError =
      validators.required(data.birthDate, "Data de nascimento é obrigatória") ||
      validators.pastDate(
        data.birthDate,
        "Data de nascimento não pode ser no futuro",
      );
    if (birthDateError) errors.birthDate = birthDateError;

    const weightError =
      validators.required(data.weight, "Peso é obrigatório") ||
      validators.positiveNumber(
        data.weight,
        "Peso deve ser um número positivo",
      );
    if (weightError) errors.weight = weightError;

    const statusError = validators.required(
      data.status,
      "Status é obrigatório",
    );
    if (statusError) errors.status = statusError;

    return errors;
  },

  // Validação para aplicações de vacina
  application: (data) => {
    const errors = {};

    const animalError = validators.required(
      data.animalId,
      "Animal é obrigatório",
    );
    if (animalError) errors.animalId = animalError;

    const vaccineError = validators.required(
      data.vaccineId,
      "Vacina é obrigatória",
    );
    if (vaccineError) errors.vaccineId = vaccineError;

    const dateError = validators.required(
      data.applicationDate,
      "Data de aplicação é obrigatória",
    );
    if (dateError) errors.applicationDate = dateError;

    const dosageError =
      validators.required(data.dosage, "Dosagem é obrigatória") ||
      validators.positiveNumber(
        data.dosage,
        "Dosagem deve ser um número positivo",
      );
    if (dosageError) errors.dosage = dosageError;

    return errors;
  },
};

// Função utilitária para criar esquemas de validação personalizados
export const createValidationSchema = (fields) => (data) => {
  const errors = {};

  Object.entries(fields).forEach(([fieldName, validatorFn]) => {
    const error = validatorFn(data[fieldName], data);
    if (error) errors[fieldName] = error;
  });

  return errors;
};
