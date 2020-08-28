import React from "react";
import TextField from "@atlaskit/textfield";
import { ErrorMessage, Field } from "@atlaskit/form";
import {
  validateField,
  FormFieldProps,
  ValidationFunction
} from "../formHelper";

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]/i;
export const validateEmail: ValidationFunction = value =>
  validateField(value, emailRegex);

const Email: React.FC<FormFieldProps> = ({ name }) => {
  return (
    <Field
      name={name}
      label="Email"
      defaultValue=""
      isRequired
      validate={validateEmail}
    >
      {({ fieldProps, meta, valid }): React.ReactNode => (
        <>
          <TextField testId="email-test-id" type="email" {...fieldProps} />
          {meta.dirty && !valid && (
            <ErrorMessage>This email is invalid.</ErrorMessage>
          )}
        </>
      )}
    </Field>
  );
};

export default Email;
