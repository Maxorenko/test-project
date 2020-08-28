import React from "react";
import Flag from "@atlaskit/flag";
import styled from "styled-components";
import SuccessIcon from "@atlaskit/icon/glyph/check-circle";
import { G300 } from "@atlaskit/theme/colors";

interface SuccessFlagProps {
  onDismiss: () => void;
}

const FlagWrapper = styled.div`
  margin-bottom: 16px;
`;

const SuccessFlag: React.FC<SuccessFlagProps> = ({ onDismiss }) => {
  return (
    <FlagWrapper>
      <Flag
        id="successFlag"
        icon={<SuccessIcon primaryColor={G300} label="Info" />}
        description="Your valuable feedback helps us continuously improve our products"
        title="Thanks!"
        actions={[
          {
            content: "Dismiss",
            onClick: onDismiss
          }
        ]}
      />
    </FlagWrapper>
  );
};

export default SuccessFlag;
