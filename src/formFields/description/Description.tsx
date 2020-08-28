import React from "react";
import { Field } from "@atlaskit/form";
import FieldTextArea from "@atlaskit/field-text-area";
import { FormFieldProps } from "../formHelper";

const Description: React.FC<FormFieldProps> = ({ name }) => {
  return (
    <Field name={name} label="Description" defaultValue="">
      {({ fieldProps }): React.ReactNode => (
        <FieldTextArea isLabelHidden shouldFitContainer {...fieldProps} />
      )}
    </Field>
  );
};

export default Description;
