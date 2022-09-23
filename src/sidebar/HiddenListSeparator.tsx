import styled from "styled-components";

const WhiteLine = styled.span`
  :after {
    width: 72px;
    content: "";
    display: block;
    border-bottom: 1px solid #ffffff;
  }
`;

const HiddenListWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HiddenListSeparator = () => {
    return (
        <HiddenListWrap>
            <WhiteLine />
            <h3>Hidden list</h3>
            <WhiteLine />
        </HiddenListWrap>
    );
};
