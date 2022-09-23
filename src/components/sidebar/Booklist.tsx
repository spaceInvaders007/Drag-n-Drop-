import { SidebarButton } from "./SidebarButton";
import React, { FC } from "react";
import styled from "styled-components";
import { Book, Visibility } from "../../types";

const StyledBookList = styled.div`
  min-height: 70px;
`;

type BooklistProps = {
  booksList: Book[];
  visibility: Visibility;
  onMouseEnter: (id: string) => void;
};

export const Booklist: FC<BooklistProps> = ({
  booksList = [],
  visibility,
  onMouseEnter,
}) => {
  let booleanStatus = visibility === "hidden";
  return (
    <StyledBookList>
      {booksList.map(
        ({ id, isHidden, title, author }) =>
          booleanStatus === isHidden && (
            <div onMouseEnter={() => onMouseEnter(id)}>
              <SidebarButton
                key={id}
                title={title}
                isHidden={isHidden}
                author={author}
                id={id}
              />
            </div>
          )
      )}
    </StyledBookList>
  );
};
