import { BooksButton } from "./BooksButton";
import styled from "styled-components";

const SideBarHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

const FlexWidthWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  margin-top: 0;
`;

const StyledTitle = styled.h4`
  height: 15px;
  margin-bottom: 0;
  align-self: baseline;
`;

export const SidebarHeader = () => {
    return (
        <SideBarHeaderContainer>
            <StyledTitle>Shopping</StyledTitle>
            <FlexWidthWrap>
                <h1>Wish list</h1>
                <BooksButton />
            </FlexWidthWrap>
        </SideBarHeaderContainer>
    );
};
