import React from "react";
import { mount } from "enzyme";
import Form from "@atlaskit/form";
import Button from "@atlaskit/button";
import { act } from "react-dom/test-utils";
import App from "./App";
import Name from "./formFields/name/Name";
import Email from "./formFields/email/Email";
import Phone from "./formFields/phone/Phone";
import Country from "./formFields/country/Country";
import Password from "./formFields/password/Password";
import Description from "./formFields/description/Description";
import Checkbox from "./formFields/checkbox/Checkbox";
import SuccessFlag from "./formFields/successFlag/SuccessFlag";

describe("form", () => {
  test("should render form with proper props", () => {
    const wrapper = mount(<App />);
    const formWrapper = wrapper.find(Form);
    expect(wrapper.find(Form).props()).toMatchInlineSnapshot(`
      Object {
        "children": [Function],
        "onSubmit": [Function],
      }
    `);
    expect(formWrapper.find("form").props()).toMatchInlineSnapshot(
      {
        children: expect.anything()
      },
      `
      Object {
        "children": Anything,
        "onKeyDown": [Function],
        "onSubmit": [Function],
      }
    `
    );
  });
  test("should render form fields", () => {
    const wrapper = mount(<App />);
    const formElement = wrapper.find("form");

    expect(formElement.find(Name).exists()).toBeTruthy();
    expect(formElement.find(Email).exists()).toBeTruthy();
    expect(formElement.find(Phone).exists()).toBeTruthy();
    expect(formElement.find(Country).exists()).toBeTruthy();
    expect(formElement.find(Password).exists()).toBeTruthy();
    expect(formElement.find(Checkbox).exists()).toBeTruthy();
    expect(formElement.find(Description).exists()).toBeTruthy();
  });

  test("should render submit button", () => {
    const wrapper = mount(<App />);
    const formElement = wrapper.find("form");
    expect(formElement.find(Button).props()).toMatchInlineSnapshot(`
      Object {
        "appearance": "primary",
        "children": "Submit",
        "isLoading": false,
        "type": "submit",
      }
    `);
  });

  test("should show SuccessFlag after submit, hide on dismiss", async () => {
    const wrapper = mount(<App />);
    const formWrapper = wrapper.find(Form);
    jest.useFakeTimers();

    await act(async () => {
      // @ts-ignore
      formWrapper.props().onSubmit();
      jest.runAllTimers();
    });
    wrapper.update();

    const successFlagProps = wrapper.find(SuccessFlag).props();
    expect(successFlagProps).toMatchInlineSnapshot(`
      Object {
        "onDismiss": [Function],
      }
    `);
    expect(wrapper.find(Form).exists()).toBeFalsy();

    act(() => {
      successFlagProps.onDismiss();
    });
    wrapper.update();
    expect(wrapper.find(SuccessFlag).exists()).toBeFalsy();
    expect(wrapper.find(Form).exists()).toBeTruthy();
    jest.useRealTimers();
  });
});
