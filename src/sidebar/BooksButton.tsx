import styled from "styled-components";

const StyledBooksButton = styled.button`
  background: #f4f4f4;
  border-radius: 2px;
  height: 25px;
  padding: 0 10px;
  border: none;
  color: #EF8774;
  font-weight: 700;
`;

export const BooksButton = () => {
    return <StyledBooksButton>Books</StyledBooksButton>;
};
