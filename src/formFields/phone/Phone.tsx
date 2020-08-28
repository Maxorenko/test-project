import React from "react";
import TextField from "@atlaskit/textfield";
import { Field, ErrorMessage } from "@atlaskit/form";
import {
  FormFieldProps,
  validateField,
  ValidationFunction
} from "../formHelper";

const phoneRegex = /(\+380)\d{9}/;

export const validatePhone: ValidationFunction = value =>
  validateField(value, phoneRegex);

const Phone: React.FC<FormFieldProps> = ({ name }) => (
  <Field
    name={name}
    label="Phone"
    defaultValue=""
    isRequired
    validate={validatePhone}
  >
    {({ fieldProps, meta, valid }): React.ReactNode => (
      <>
        <TextField {...fieldProps} css type="tel" />
        {meta.dirty && !valid && (
          <ErrorMessage>
            Phone number must start with +380 and it&apos;s length must be 13
            characters.
          </ErrorMessage>
        )}
      </>
    )}
  </Field>
);

export default Phone;
