import { useDragAndDrop } from "../../hooks/useDragAndDrop";
import { Booklist } from "./Booklist";
import { FC } from "react";
import styled from "styled-components";
import { SidebarHeader } from "./SidebarHeader";
import { HiddenListSeparator } from "./HiddenListSeparator";
import { Book } from "../../types";

const SideBarWrap = styled.div`
  padding: 5px;
`;

type SidebarProps = {
  bookCollection: Book[];
  onMouseEnter: (id: string) => void;
};

export const Sidebar: FC<SidebarProps> = ({ bookCollection, onMouseEnter }) => {
  const { bookList, handleUpdateList } = useDragAndDrop(bookCollection);

  return (
    <SideBarWrap>
      <SidebarHeader />
      <Booklist
        items={bookList}
        visibility={"visible"}
        handleUpdateList={handleUpdateList}
        onMouseEnter={onMouseEnter}
      />

      <HiddenListSeparator />
      <Booklist
        items={bookList}
        visibility={"hidden"}
        handleUpdateList={handleUpdateList}
        onMouseEnter={onMouseEnter}
      />
    </SideBarWrap>
  );
};
