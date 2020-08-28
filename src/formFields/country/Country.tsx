import React from "react";
import { Field } from "@atlaskit/form";
import { CountrySelect } from "@atlaskit/select";
import { FormFieldProps } from "../formHelper";

const Country: React.FC<FormFieldProps> = ({ name }) => {
  return (
    <Field name={name} label="Country" defaultValue="">
      {({ fieldProps }): React.ReactNode => (
        <CountrySelect placeholder="Country" {...fieldProps} />
      )}
    </Field>
  );
};

export default Country;
