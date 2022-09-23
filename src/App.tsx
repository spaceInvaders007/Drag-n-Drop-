import { useEffect, useState } from "react";
import styled from "styled-components";
import {Book} from "./types";

const AppStyles = styled.div`
  background-color: black;
  color: white;
  display: flex;
  height: 100vh;
  text-align: center;
  padding-bottom: 2em;
`;

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

const App = () => {
  const [bookCollection, setBookCollection] = useState<Book[]>([]);

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
      <AppStyles>
        <SidebarWrap>
        </SidebarWrap>
        <ContentWrap>
        </ContentWrap>
      </AppStyles>
  );
};
export default App;
