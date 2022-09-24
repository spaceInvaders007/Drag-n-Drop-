// @ts-ignore
import ResetButtonIcon from "../../icons/reset.svg";
import styled from "styled-components";
import { FC } from "react";

const StyledRestButton = styled.span`
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
`;

type ResetButtonProps = {
  handleReset: () => void;
};

export const ResetButton: FC<ResetButtonProps> = ({ handleReset }) => {
  return (
    <StyledRestButton onClick={() => handleReset()}>
      <img src={ResetButtonIcon} />
    </StyledRestButton>
  );
};
