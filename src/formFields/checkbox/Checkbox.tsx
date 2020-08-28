import React from "react";
import { CheckboxField } from "@atlaskit/form";
import { Checkbox as AtlaskitCheckbox } from "@atlaskit/checkbox";
import { FormFieldProps } from "../formHelper";

const Checkbox: React.FC<FormFieldProps> = ({ name }) => {
  return (
    <CheckboxField name={name} label="Checkbox">
      {({ fieldProps }): React.ReactNode => (
        <AtlaskitCheckbox
          testId="checkbox-test-id"
          label="Checkbox"
          {...fieldProps}
        />
      )}
    </CheckboxField>
  );
};

export default Checkbox;
