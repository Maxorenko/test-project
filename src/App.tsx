import React, { useState } from "react";
import Button from "@atlaskit/button";
import Form, { FormFooter } from "@atlaskit/form";
import styled from "styled-components";
import Name from "./formFields/name/Name";
import Email from "./formFields/email/Email";
import Phone from "./formFields/phone/Phone";
import Country from "./formFields/country/Country";
import Password from "./formFields/password/Password";
import Description from "./formFields/description/Description";
import SuccessFlag from "./formFields/successFlag/SuccessFlag";
import Checkbox from "./formFields/checkbox/Checkbox";

interface Country {
  abbr: string;
  code: string;
  icon: string;
  name: string;
}

export interface FormData {
  name: string;
  email: string;
  phone: number;
  country: Country;
  password: string;
  checkbox: boolean;
  description: string;
}

const Wrapper = styled.div`
  display: flex;
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  padding: 16px;
  flex-direction: column;
`;

const App: React.FC = () => {
  const [isSuccessFlagVisible, setIsSuccessFlagVisible] = useState(false);

  const handleFormSubmit = (): Promise<undefined> => {
    return new Promise(resolve => setTimeout(resolve, 2000)).then(() => {
      setIsSuccessFlagVisible(true);
      return undefined;
    });
  };

  const handleFlagDismiss = (): void => {
    setIsSuccessFlagVisible(false);
  };

  return (
    <Wrapper>
      {isSuccessFlagVisible && <SuccessFlag onDismiss={handleFlagDismiss} />}
      {!isSuccessFlagVisible && (
        <Form<FormData> onSubmit={handleFormSubmit}>
          {({ formProps, submitting }): React.ReactNode => (
            <form {...formProps}>
              <Name name="name" />
              <Email name="email" />
              <Phone name="phone" />
              <Country name="country" />
              <Password name="password" />
              <Checkbox name="checkbox" />
              <Description name="description" />
              <FormFooter>
                <Button
                  type="submit"
                  appearance="primary"
                  isLoading={submitting}
                >
                  Submit
                </Button>
              </FormFooter>
            </form>
          )}
        </Form>
      )}
    </Wrapper>
  );
};

export default App;
