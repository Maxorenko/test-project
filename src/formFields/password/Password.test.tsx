import React from "react";
import { mount } from "enzyme";
import TextField from "@atlaskit/textfield";
import { Field } from "@atlaskit/form";
import Password, { validatePassword } from "./Password";

describe("password", () => {
  test("should render required form Field and TextField", () => {
    const wrapper = mount(<Password name="password" />);
    const passwordFieldWrapper = wrapper.find(Field);
    expect(passwordFieldWrapper.props()).toMatchInlineSnapshot(`
      Object {
        "children": [Function],
        "defaultValue": "",
        "isDisabled": false,
        "isRequired": true,
        "label": "Password",
        "name": "password",
        "validate": [Function],
      }
    `);

    expect(passwordFieldWrapper.find(TextField).props()).toMatchInlineSnapshot(`
      Object {
        "aria-invalid": "false",
        "aria-labelledby": "password-uid1-label password-uid1-helper password-uid1-valid password-uid1-error",
        "id": "password-uid1",
        "isDisabled": false,
        "isInvalid": false,
        "isRequired": true,
        "name": "password",
        "onBlur": [Function],
        "onChange": [Function],
        "onFocus": [Function],
        "type": "password",
        "value": "",
      }
    `);
  });
  test("should have validation", () => {
    const wrapper = mount(<Password name="password" />);
    expect(wrapper.find(Field).props().validate).toBe(validatePassword);
  });

  test("should validate password", () => {
    const incorrectPassword = "rrrrrr";
    const incorrectPasswordLength = "rrrrR";
    const correctPassword = "rrrrrR";
    expect(validatePassword(incorrectPassword)).toBe("error");
    expect(validatePassword(incorrectPasswordLength)).toBe("error");
    expect(validatePassword(correctPassword)).toBe(undefined);
  });
});
