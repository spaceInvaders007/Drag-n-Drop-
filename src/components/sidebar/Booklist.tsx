import { SidebarButton } from "./SidebarButton";
import React, { FC } from "react";
import styled from "styled-components";
import { Book, Visibility } from "../../types";

const StyledBookList = styled.div`
  min-height: 70px;
`;

type BooklistProps = {
  items: Book[];
  visibility: Visibility;
  handleUpdateList: (id: string) => void;
  onMouseEnter: (id: string) => void;
};

export const Booklist: FC<BooklistProps> = ({
  items = [],
  visibility,
  handleUpdateList,
  onMouseEnter,
}) => {
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    handleUpdateList(e.dataTransfer.getData("text"));
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) =>
    e.preventDefault();

  let booleanStatus = visibility === "hidden";
  return (
    <StyledBookList onDrop={handleDrop} onDragOver={handleDragOver}>
      {items.map(
        ({ id, isHidden, title, author }) =>
          booleanStatus === isHidden && (
            <div onMouseEnter={() => onMouseEnter(id)} key={id}>
              <SidebarButton
                title={title}
                isHidden={isHidden}
                author={author}
                id={id}
                handleUpdateList={handleUpdateList}
              />
            </div>
          )
      )}
    </StyledBookList>
  );
};
