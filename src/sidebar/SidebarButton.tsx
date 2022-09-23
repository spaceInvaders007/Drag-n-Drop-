import styled from "styled-components";
import VisibleIcon from "../icons/visible.svg";
import HiddenIcon from "../icons/hidden.svg";
import CloseIcon from "../icons/close.svg";
import { FC } from "react";

const Button = styled.button`
  border-radius: 5px;
  display: flex;
  background: linear-gradient(85.5deg, #eb5a52 1.03%, #f7cd98 101.63%);
  padding: 0.5em;
  width: 100%;
  border: none;
  min-height: 42px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
  margin: 0 10px 10px 0px;
  color: white;
  justify-content: space-around;
`;

const PointerIconWrap = styled.span`
  cursor: pointer;
  align-self: center;
`;

const Title = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  float: left;
`;

const Author = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 8px;
  line-height: 12px;
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
};

export const SidebarButton: FC<SidebarButtonProps> = ({
  title,
  author,
  isHidden,
  id,
}) => {

  return (
    <Button draggable >
      <PointerIconWrap>
        {isHidden ? <img src={HiddenIcon} /> : <img src={VisibleIcon} />}
      </PointerIconWrap>
      <TitleAuthorWrap>
        <Title>{title} </Title>
        <Author>{author}</Author>
      </TitleAuthorWrap>
      <PointerIconWrap>
        <img src={CloseIcon} />
      </PointerIconWrap>
    </Button>
  );
};
