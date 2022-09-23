import { FC } from "react";
import styled from "styled-components";
import { SidebarHeader } from "./SidebarHeader";
import { HiddenListSeparator } from "./HiddenListSeparator";
import { Book } from "../../types";
import {Booklist} from "./Booklist";

const SideBarWrap = styled.div`
  padding: 5px;
`;

type SidebarProps = {
  booksList: Book[];
    onMouseEnter: (id: string) => void;
};

export const Sidebar: FC<SidebarProps> = ({ booksList,onMouseEnter }) => {
  return (
    <SideBarWrap>
      <SidebarHeader />
      <Booklist
          booksList={booksList}
        visibility={"visible"}
          onMouseEnter={onMouseEnter}
      />
      <HiddenListSeparator />
      <Booklist
          booksList={booksList}
        visibility={"visible"}
          onMouseEnter={onMouseEnter}
      />
    </SideBarWrap>
  );
};
