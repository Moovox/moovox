/**
 * Form validation utilities
 */

// Basic validations
export const validators = {
  required: (value, message = "Field is required") => {
    return !value?.trim() ? message : null;
  },

  email: (value, message = "Invalid email") => {
    const emailRegex = /\S+@\S+\.\S+/;
    return value && !emailRegex.test(value) ? message : null;
  },

  minLength: (min, message) => (value) => {
    return value && value.length < min
      ? message || `Minimum ${min} characters`
      : null;
  },

  maxLength: (max, message) => (value) => {
    return value && value.length > max
      ? message || `Maximum ${max} characters`
      : null;
  },

  positiveNumber: (value, message = "Must be a positive number") => {
    return value && (isNaN(parseFloat(value)) || parseFloat(value) <= 0)
      ? message
      : null;
  },

  pastDate: (value, message = "Date cannot be in the future") => {
    if (!value) return null;
    const inputDate = new Date(value);
    const today = new Date();
    return inputDate > today ? message : null;
  },

  futureDate: (value, message = "Date cannot be in the past") => {
    if (!value) return null;
    const inputDate = new Date(value);
    const today = new Date();
    return inputDate < today ? message : null;
  },

  match: (otherValue, message) => (value) => {
    return value !== otherValue ? message || "Values do not match" : null;
  },
};

// Function to combine multiple validations
export const combineValidators =
  (...validatorFunctions) =>
  (value) => {
    for (const validator of validatorFunctions) {
      const error = validator(value);
      if (error) return error;
    }
    return null;
  };

// Specific validation schemas
export const validationSchemas = {
  // Vaccine validation
  vaccine: (data) => {
    const errors = {};

    const nameError = validators.required(data.name, "Name is required");
    if (nameError) errors.name = nameError;

    const targetDiseaseError = validators.required(
      data.targetDisease,
      "Target disease is required",
    );
    if (targetDiseaseError) errors.targetDisease = targetDiseaseError;

    const manufacturerError = validators.required(
      data.manufacturerId,
      "Manufacturer is required",
    );
    if (manufacturerError) errors.manufacturerId = manufacturerError;

    const typeError = validators.required(
      data.typeId,
      "Vaccine type is required",
    );
    if (typeError) errors.typeId = typeError;

    const batchError = validators.required(
      data.batchNumber,
      "Batch number is required",
    );
    if (batchError) errors.batchNumber = batchError;

    const expirationError =
      validators.required(data.expirationDate, "Expiration date is required") ||
      validators.futureDate(
        data.expirationDate,
        "Expiration date cannot be in the past",
      );
    if (expirationError) errors.expirationDate = expirationError;

    const requiredDosesError =
      validators.required(data.requiredDoses, "Required doses are required") ||
      validators.positiveNumber(
        data.requiredDoses,
        "Required doses must be a positive number",
      );
    if (requiredDosesError) errors.requiredDoses = requiredDosesError;

    const dosageError = validators.required(data.dosage, "Dosage is required");
    if (dosageError) errors.dosage = dosageError;

    // Optional: Validate dosing interval if provided
    if (data.dosingInterval && data.dosingInterval !== "") {
      const intervalError = validators.positiveNumber(
        data.dosingInterval,
        "Dosing interval must be a positive number",
      );
      if (intervalError) errors.dosingInterval = intervalError;
    }

    return errors;
  },

  // User validation
  user: (data) => {
    const errors = {};

    const nameError = validators.required(data.name, "Name is required");
    if (nameError) errors.name = nameError;

    const emailError =
      validators.required(data.email, "Email is required") ||
      validators.email(data.email);
    if (emailError) errors.email = emailError;

    const userTypeError = validators.required(
      data.userType,
      "User type is required",
    );
    if (userTypeError) errors.userType = userTypeError;

    if (data.password !== undefined) {
      const passwordError =
        validators.required(data.password, "Password is required") ||
        validators.minLength(
          6,
          "Password must be at least 6 characters",
        )(data.password);
      if (passwordError) errors.password = passwordError;

      if (data.confirmPassword !== undefined) {
        const confirmError = validators.match(
          data.password,
          "Passwords do not match",
        )(data.confirmPassword);
        if (confirmError) errors.confirmPassword = confirmError;
      }
    }

    return errors;
  },

  // Animal validation
  animal: (data) => {
    const errors = {};

    const speciesError = validators.required(
      data.speciesId,
      "Species is required",
    );
    if (speciesError) errors.speciesId = speciesError;

    const breedError = validators.required(data.breedId, "Breed is required");
    if (breedError) errors.breedId = breedError;

    const birthDateError =
      validators.required(data.birthDate, "Birth date is required") ||
      validators.pastDate(data.birthDate, "Birth date cannot be in the future");
    if (birthDateError) errors.birthDate = birthDateError;

    const weightError =
      validators.required(data.weight, "Weight is required") ||
      validators.positiveNumber(
        data.weight,
        "Weight must be a positive number",
      );
    if (weightError) errors.weight = weightError;

    const statusError = validators.required(data.status, "Status is required");
    if (statusError) errors.status = statusError;

    return errors;
  },

  // Application validation
  application: (data) => {
    const errors = {};

    const animalError = validators.required(
      data.animalId,
      "Animal is required",
    );
    if (animalError) errors.animalId = animalError;

    const vaccineError = validators.required(
      data.vaccineId,
      "Vaccine is required",
    );
    if (vaccineError) errors.vaccineId = vaccineError;

    const dateError = validators.required(
      data.applicationDate,
      "Application date is required",
    );
    if (dateError) errors.applicationDate = dateError;

    const dosageError =
      validators.required(data.dosage, "Dosage is required") ||
      validators.positiveNumber(
        data.dosage,
        "Dosage must be a positive number",
      );
    if (dosageError) errors.dosage = dosageError;

    return errors;
  },

  // Vaccine batch validation
  vaccineBatch: (data) => {
    const errors = {};

    const vaccineIdError = validators.required(
      data.baseVaccineId,
      "Base vaccine is required",
    );
    if (vaccineIdError) errors.baseVaccineId = vaccineIdError;

    const batchError = validators.required(
      data.batchNumber,
      "Batch number is required",
    );
    if (batchError) errors.batchNumber = batchError;

    const expirationError =
      validators.required(data.expirationDate, "Expiration date is required") ||
      validators.futureDate(
        data.expirationDate,
        "Expiration date cannot be in the past",
      );
    if (expirationError) errors.expirationDate = expirationError;

    return errors;
  },
};

// Utility function to create custom validation schemas
export const createValidationSchema = (fields) => (data) => {
  const errors = {};

  Object.entries(fields).forEach(([fieldName, validatorFn]) => {
    const error = validatorFn(data[fieldName], data);
    if (error) errors[fieldName] = error;
  });

  return errors;
};
