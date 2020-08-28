import React from "react";
import { ErrorMessage, Field } from "@atlaskit/form";
import TextField from "@atlaskit/textfield";
import {
  FormFieldProps,
  validateField,
  ValidationFunction
} from "../formHelper";

const passwordRegex = /(?=.*[a-z])(?=.*[A-Z]).{6,}/;

export const validatePassword: ValidationFunction = value =>
  validateField(value, passwordRegex);

const Password: React.FC<FormFieldProps> = ({ name }) => (
  <Field
    name={name}
    label="Password"
    isRequired
    defaultValue=""
    validate={validatePassword}
  >
    {({ fieldProps, valid, meta }): React.ReactNode => {
      return (
        <>
          <TextField type="password" {...fieldProps} />
          {meta.dirty && !valid && (
            <ErrorMessage>
              Password must have more than 6 characters, at least one uppercase
              and one lowercase letters.
            </ErrorMessage>
          )}
        </>
      );
    }}
  </Field>
);

export default Password;
