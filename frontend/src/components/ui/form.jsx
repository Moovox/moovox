import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import {
  Controller,
  FormProvider,
  useFormContext,
  useFormState,
} from "react-hook-form"

import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"

const Form = FormProvider

const FormFieldContext = React.createContext({})

function FormField(props) {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext) || {}
  const itemContext = React.useContext(FormItemContext) || {}
  const { getFieldState } = useFormContext()
  const name = fieldContext.name
  const id = itemContext.id
  const formState = useFormState({ name })
  const fieldState = name ? getFieldState(name, formState) : {}

  if (!name) {
    throw new Error("useFormField deve ser usado dentro de <FormField> e receber a prop 'name'.")
  }

  return {
    id: id || '',
    name,
    formItemId: `${id || ''}-form-item`,
    formDescriptionId: `${id || ''}-form-item-description`,
    formMessageId: `${id || ''}-form-item-message`,
    error: (fieldState && typeof fieldState === 'object' && 'error' in fieldState) ? fieldState.error : null,
    ...fieldState,
  }
}

const FormItemContext = React.createContext({})

function FormItem({ className, ...props }) {
  const id = React.useId()

  return (
    <FormItemContext.Provider value={{ id }}>
      <div
        data-slot="form-item"
        className={cn("grid gap-2", className)}
        {...props}
      />
    </FormItemContext.Provider>
  )
}

function FormLabel({ className, ...props }) {
  const { error, formItemId } = useFormField()

  return (
    <Label
      data-slot="form-label"
      data-error={!!error}
      className={cn("data-[error=true]:text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />
  )
}

function FormControl(props) {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

  return (
    <Slot
      data-slot="form-control"
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  )
}

function FormDescription({ className, ...props }) {
  const { formDescriptionId } = useFormField()

  return (
    <p
      data-slot="form-description"
      id={formDescriptionId}
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

function FormMessage({ className, ...props }) {
  const { error, formMessageId } = useFormField()
  let body = null
  if (error && typeof error === 'object' && 'message' in error) {
    body = String(error.message)
  } else if (error) {
    body = String(error)
  } else {
    body = props.children
  }

  if (!body) {
    return null
  }

  return (
    <p
      data-slot="form-message"
      id={formMessageId}
      className={cn("text-destructive text-sm", className)}
      {...props}
    >
      {body}
    </p>
  )
}

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
}
