import { Sidebar } from "./components/sidebar/Sidebar";
import { Content } from "./components/content/Content";
import { useEffect, useState } from "react";
import { Book } from "./types";
import styled from "styled-components";

const SidebarWrap = styled.div`
  max-width: 278px;
  min-height: 100vh;
  margin: 10px;
  background-color: #eb5a52;
  height: 100vh;
  border-radius: 8px;
  padding: 0.5em;
`;

const ContentWrap = styled.div`
  width: 68%;
  height: 100vh;
  margin: 10px 10px 10px 0;
  background-color: #eb5a52;
  border-radius: 8px;
  padding: 0.5em;
  flex: 1;
`;

export const ShoppingWishlist = () => {
  const [bookCollection, setBookCollection] = useState<Book[]>([]);
  const [bookToShow, setBookToShow] = useState<Book>();
  const [bookIdToShow, setBookIdToShow] = useState<string>();

  useEffect(() => {
    const extractedBook = bookCollection.find(
      (book) => book.id === bookIdToShow
    );
    setBookToShow(extractedBook);
  }, [bookIdToShow, bookCollection]);

  const handleMouseEnter = (id: string) => {
    setBookIdToShow(id);
  };

  useEffect(() => {
    const fetchJson = async () => {
      await fetch("/books.json")
        .then((res) => res.json())
        .then((data) => setBookCollection(data))
        .catch((error) => console.error(error));
    };
    fetchJson();
  }, []);
  return (
    <>
      <SidebarWrap>
        <Sidebar booksList={bookCollection} onMouseEnter={handleMouseEnter} />
      </SidebarWrap>
      <ContentWrap>
        <Content {...bookToShow} />
      </ContentWrap>
    </>
  );
};
