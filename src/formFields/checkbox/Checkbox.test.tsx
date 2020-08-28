import React from "react";
import { mount } from "enzyme";
import { CheckboxField } from "@atlaskit/form";
import { Checkbox as AtlaskitCheckbox } from "@atlaskit/checkbox";
import Checkbox from "./Checkbox";

describe("checkbox", () => {
  test("should render CheckboxField and checkbox", () => {
    const wrapper = mount(<Checkbox name="checkbox" />);
    const checkboxFieldWrapper = wrapper.find(CheckboxField);
    expect(checkboxFieldWrapper.props()).toMatchInlineSnapshot(`
          Object {
            "children": [Function],
            "defaultIsChecked": false,
            "label": "Checkbox",
            "name": "checkbox",
          }
      `);

    expect(checkboxFieldWrapper.find(AtlaskitCheckbox).props())
      .toMatchInlineSnapshot(`
      Object {
        "aria-invalid": "false",
        "aria-labelledby": "checkbox-uid1-label checkbox-uid1-helper checkbox-uid1-valid checkbox-uid1-error",
        "id": "checkbox-uid1",
        "isChecked": false,
        "isDisabled": false,
        "isInvalid": false,
        "isRequired": false,
        "label": "Checkbox",
        "name": "checkbox",
        "onBlur": [Function],
        "onChange": [Function],
        "onFocus": [Function],
        "testId": "checkbox-test-id",
        "value": undefined,
      }
    `);
  });
});
