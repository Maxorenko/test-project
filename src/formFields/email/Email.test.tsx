import React from "react";
import { mount } from "enzyme";
import TextField from "@atlaskit/textfield";
import { Field } from "@atlaskit/form";
import Email, { validateEmail } from "./Email";

describe("email", () => {
  test("should render required form Field and TextField", () => {
    const wrapper = mount(<Email name="email" />);
    const emailFieldWrapper = wrapper.find(Field);
    expect(emailFieldWrapper.props()).toMatchInlineSnapshot(`
          Object {
            "children": [Function],
            "defaultValue": "",
            "isDisabled": false,
            "isRequired": true,
            "label": "Email",
            "name": "email",
            "validate": [Function],
          }
      `);

    expect(emailFieldWrapper.find(TextField).props()).toMatchInlineSnapshot(`
      Object {
        "aria-invalid": "false",
        "aria-labelledby": "email-uid1-label email-uid1-helper email-uid1-valid email-uid1-error",
        "id": "email-uid1",
        "isDisabled": false,
        "isInvalid": false,
        "isRequired": true,
        "name": "email",
        "onBlur": [Function],
        "onChange": [Function],
        "onFocus": [Function],
        "testId": "email-test-id",
        "type": "email",
        "value": "",
      }
    `);
  });
  test("should have validation", () => {
    const wrapper = mount(<Email name="email" />);
    expect(wrapper.find(Field).props().validate).toBe(validateEmail);
  });

  test("should validate email", () => {
    const incorrectEmail = "testemail@";
    const correctEmail = "test@test";
    expect(validateEmail(incorrectEmail)).toBe("error");
    expect(validateEmail(correctEmail)).toBe(undefined);
  });
});
