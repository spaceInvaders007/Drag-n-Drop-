import { useDragAndDrop } from "../../hooks/useDragAndDrop";
import { Booklist } from "./Booklist";
import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { SidebarHeader } from "./SidebarHeader";
import { HiddenListSeparator } from "./HiddenListSeparator";
import { Book, Visibility } from "../../types";
import { ResetButton } from "./ResetButton";
import { isEqual } from "../../helpers";

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
  const { bookList, handleUpdateList, handleVisibilityClick } = useDragAndDrop(bookCollection);
  const [displayResetButton, setDisplayResetButton] = useState(false);

  useEffect(() => {
    setDisplayResetButton(!isEqual(bookCollection, bookList));
  }, [handleUpdateList]);

  const bookListArray = [Visibility.visible, Visibility.hidden];

  return (
    <SideBarWrap>
      <SidebarHeader />
      {bookListArray.map((visibility, index) => (
        <div key={visibility}>
          <Booklist
            items={bookList}
            visibility={visibility}
            handleUpdateList={handleUpdateList}
            onMouseEnter={onMouseEnter}
            handleVisibilityClick={handleVisibilityClick}
          />
          {index === 0 && <HiddenListSeparator />}
        </div>
      ))}
      {displayResetButton && <ResetButton handleReset={handleReset} />}
    </SideBarWrap>
  );
};
