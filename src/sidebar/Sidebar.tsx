import { FC } from "react";
import styled from "styled-components";
import { SidebarHeader } from "./SidebarHeader";
import { HiddenListSeparator } from "./HiddenListSeparator";
import { Book } from "../types";
import {Booklist} from "./Booklist";

const SideBarWrap = styled.div`
  padding: 5px;
`;

type SidebarProps = {
  booksList: Book[];
};

export const Sidebar: FC<SidebarProps> = ({ booksList }) => {
  return (
    <SideBarWrap>
      <SidebarHeader />
      <Booklist
          booksList={booksList}
        visibility={"visible"}
      />
      <HiddenListSeparator />
      <Booklist
          booksList={booksList}
        visibility={"visible"}
      />
    </SideBarWrap>
  );
};
