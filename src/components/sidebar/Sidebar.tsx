import {useDragAndDrop} from "../../hooks/useDragAndDrop";
import {Booklist} from "./Booklist";
import {FC, useEffect, useState} from "react";
import styled from "styled-components";
import {SidebarHeader} from "./SidebarHeader";
import {HiddenListSeparator} from "./HiddenListSeparator";
import {Book, Visibility} from "../../types";
import {ResetButton} from "./ResetButton";
import {isEqual} from "../../helpers";

const SideBarWrap = styled.div`
  padding: 5px;
`;

type SidebarProps = {
  bookCollection: Book[];
  onMouseEnter: (id: string) => void;
  handleReset: () => void;
};

export const Sidebar: FC<SidebarProps> = ({
  bookCollection,
  onMouseEnter,
  handleReset,
}) => {
    const { bookList, handleUpdateList } = useDragAndDrop(bookCollection);
    const [displayResetButton, setDisplayResetButton] = useState(false);

    useEffect(()=> {
        setDisplayResetButton(!isEqual(bookCollection, bookList))
    },[handleUpdateList])

  return (
    <SideBarWrap>
      <SidebarHeader />
      <Booklist
        items={bookList}
        visibility={Visibility.visible}
        handleUpdateList={handleUpdateList}
        onMouseEnter={onMouseEnter}
      />

      <HiddenListSeparator />
      <Booklist
        items={bookList}
        visibility={Visibility.hidden}
        handleUpdateList={handleUpdateList}
        onMouseEnter={onMouseEnter}
      />
        {displayResetButton && <ResetButton handleReset={handleReset} />}
    </SideBarWrap>
  );
};
