import React, { FC } from "react";
import styled from "styled-components";

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px 40px 26px 26px;
`;

const BookSummary = styled.p`
  text-align: initial;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
`;

const BookTitle = styled.span`
  font-weight: 700;
  font-size: 36px;
  line-height: 36px;
  width: 296px;
  text-align: left;
`;

const BookAuthor = styled.span`
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
`;
const TitleAndAuthorWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  top: -190px;
  left: 117px;
`;

const ContentHeading = styled.div`
  display: flex;
  flex-direction: column;
`;

const PublisherSummaryTitle = styled.span`
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
`;

const BookCoverImage = styled.div`
  max-height: 263px;
  max-width: 233px;
`;

type ContentProps = {
  author?: string;
  title?: string;
  imageUrl?: string;
  publisherSummary?: string;
};

export const Content: FC<ContentProps> = ({
  author,
  title,
  imageUrl,
  publisherSummary,
}) => {
  return (
    <ContentWrap>
      <ContentHeading data-testid="content-heading">
        <BookCoverImage>
          <img src={imageUrl} />
        </BookCoverImage>
        <TitleAndAuthorWrap>
          <BookTitle>{title}</BookTitle>
          <BookAuthor>{author}</BookAuthor>
        </TitleAndAuthorWrap>
      </ContentHeading>
      <PublisherSummaryTitle>Publisher's Summary</PublisherSummaryTitle>
      <BookSummary>{publisherSummary}</BookSummary>
    </ContentWrap>
  );
};
