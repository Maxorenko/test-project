import React from "react";
import { mount } from "enzyme";
import TextField from "@atlaskit/textfield";
import { Field } from "@atlaskit/form";
import Phone, { validatePhone } from "./Phone";

describe("phone", () => {
  test("should render required form Field and TextField", () => {
    const wrapper = mount(<Phone name="phone" />);
    const phoneFieldWrapper = wrapper.find(Field);
    expect(phoneFieldWrapper.props()).toMatchInlineSnapshot(`
      Object {
        "children": [Function],
        "defaultValue": "",
        "isDisabled": false,
        "isRequired": true,
        "label": "Phone",
        "name": "phone",
        "validate": [Function],
      }
    `);

    expect(phoneFieldWrapper.find(TextField).props()).toMatchInlineSnapshot(`
      Object {
        "aria-invalid": "false",
        "aria-labelledby": "phone-uid1-label phone-uid1-helper phone-uid1-valid phone-uid1-error",
        "css": true,
        "id": "phone-uid1",
        "isDisabled": false,
        "isInvalid": false,
        "isRequired": true,
        "name": "phone",
        "onBlur": [Function],
        "onChange": [Function],
        "onFocus": [Function],
        "type": "tel",
        "value": "",
      }
    `);
  });
  test("should have validation", () => {
    const wrapper = mount(<Phone name="email" />);
    expect(wrapper.find(Field).props().validate).toBe(validatePhone);
  });

  test("should validate phone", () => {
    const incorrectPhone = "02354535";
    const incorrectPhoneCode = "+390553581684";
    const correctPhone = "+380553472697";
    expect(validatePhone(incorrectPhone)).toBe("error");
    expect(validatePhone(incorrectPhoneCode)).toBe("error");
    expect(validatePhone(correctPhone)).toBe(undefined);
  });
});
