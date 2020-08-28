import React from "react";
import { mount } from "enzyme";
import { Field } from "@atlaskit/form";
import { CountrySelect } from "@atlaskit/select";
import Country from "./Country";

test("should render form Field and CountrySelect", () => {
  const wrapper = mount(<Country name="country" />);
  const countryFieldWrapper = wrapper.find(Field);
  expect(countryFieldWrapper.props()).toMatchInlineSnapshot(`
    Object {
      "children": [Function],
      "defaultValue": "",
      "isDisabled": false,
      "label": "Country",
      "name": "country",
    }
  `);

  expect(countryFieldWrapper.find(CountrySelect).props())
    .toMatchInlineSnapshot(`
    Object {
      "aria-invalid": "false",
      "aria-labelledby": "country-uid1-label country-uid1-helper country-uid1-valid country-uid1-error",
      "id": "country-uid1",
      "isDisabled": false,
      "isInvalid": false,
      "isRequired": false,
      "name": "country",
      "onBlur": [Function],
      "onChange": [Function],
      "onFocus": [Function],
      "placeholder": "Country",
      "value": "",
    }
  `);
});
