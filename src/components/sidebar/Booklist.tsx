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
  handleUpdateList: (id: string, visibility: Visibility) => void;
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
    const obj = JSON.parse(e.dataTransfer.getData("text"))
    handleUpdateList(obj.id, visibility);
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
                visibility={visibility}
              />
            </div>
          )
      )}
    </StyledBookList>
  );
};
