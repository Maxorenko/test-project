import React from "react";
import { mount } from "enzyme";
import { Field } from "@atlaskit/form";
import FieldTextArea from "@atlaskit/field-text-area";
import Description from "./Description";

test("should render form Field and CountrySelect", () => {
  const wrapper = mount(<Description name="description" />);
  const descriptionFieldWrapper = wrapper.find(Field);
  expect(descriptionFieldWrapper.props()).toMatchInlineSnapshot(`
    Object {
      "children": [Function],
      "defaultValue": "",
      "isDisabled": false,
      "label": "Description",
      "name": "description",
    }
  `);

  expect(descriptionFieldWrapper.find(FieldTextArea).props())
    .toMatchInlineSnapshot(`
    Object {
      "aria-invalid": "false",
      "aria-labelledby": "description-uid1-label description-uid1-helper description-uid1-valid description-uid1-error",
      "enableResize": false,
      "id": "description-uid1",
      "isDisabled": false,
      "isInvalid": false,
      "isLabelHidden": true,
      "isRequired": false,
      "name": "description",
      "onBlur": [Function],
      "onChange": [Function],
      "onFocus": [Function],
      "shouldFitContainer": true,
      "value": "",
    }
  `);
});
