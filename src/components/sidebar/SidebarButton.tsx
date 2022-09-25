import styled from "styled-components";
// @ts-ignore
import HiddenIcon from "../../icons/hidden.svg";
// @ts-ignore
import VisibleIcon from "../../icons/visible.svg";
// @ts-ignore
import CloseIcon from "../../icons/close.svg";
import React, { FC } from "react";
import { Visibility } from "../../types";

const BookElement = styled.div`
  border-radius: 5px;
  display: flex;
  background: linear-gradient(85.5deg, #eb5a52 1.03%, #f7cd98 101.63%);
  padding: 0.5em;
  width: 95%;
  border: none;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
  margin: 0 10px 10px 0px;
  color: white;
  justify-content: space-around;
  opacity: ${({ isHidden }: { isHidden: boolean }) => (isHidden ? "0.5" : "1")}}
`;

const PointerIconWrap = styled.button`
  cursor: pointer;
  align-self: center;
  background: none;
  border: none;
`;

const Title = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  float: left;
  text-align: left;
  text-decoration: ${({ isHidden }: { isHidden: boolean }) =>
    isHidden ? "line-through" : "none"}}
`;

const Author = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 8px;
  line-height: 12px;
  text-align: left;
  text-decoration: ${({ isHidden }: { isHidden: boolean }) =>
    isHidden ? "line-through" : "none"}};
`;

const TitleAuthorWrap = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: -4px;
  width: 80%;
`;

type SidebarButtonProps = {
  title: string;
  author: string;
  isHidden: boolean;
  id: string;
  handleUpdateList: (id: string, visibility: Visibility) => void;
  visibility: Visibility;
};

export const SidebarButton: FC<SidebarButtonProps> = ({
  title,
  author,
  isHidden,
  id,
  handleUpdateList,
  visibility,
}) => {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    const obj = JSON.stringify({ id: id, visibility: visibility });
    e.dataTransfer.setData("text", obj);
  };

  return (
    <BookElement draggable onDragStart={handleDragStart} isHidden={isHidden}>
      <PointerIconWrap onClick={() => handleUpdateList(id, visibility)}>
        {isHidden ? <img src={HiddenIcon} /> : <img src={VisibleIcon} />}
      </PointerIconWrap>
      <TitleAuthorWrap>
        <Title isHidden={isHidden}>{title}</Title>
        <Author isHidden={isHidden}>{author}</Author>
      </TitleAuthorWrap>
      <PointerIconWrap>
        <img src={CloseIcon} />
      </PointerIconWrap>
    </BookElement>
  );
};
