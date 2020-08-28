import React from "react";
import TextField from "@atlaskit/textfield";
import { ErrorMessage, Field } from "@atlaskit/form";
import { FormFieldProps } from "../formHelper";

const Name: React.FC<FormFieldProps> = ({ name }) => {
  return (
    <Field name={name} label="Name" defaultValue="">
      {({ fieldProps, error }): React.ReactNode => (
        <>
          <TextField css {...fieldProps} autoComplete="false" />
          {error && (
            <ErrorMessage>
              This user name is already in use, try another one.
            </ErrorMessage>
          )}
        </>
      )}
    </Field>
  );
};

export default Name;
