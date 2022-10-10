import { useEffect, useState } from "react";
import { Book, Visibility } from "../types";

export const useDragAndDrop = (initialState: Book[]) => {
  const [bookList, setBookList] = useState<Book[]>(initialState);

  useEffect(() => {
    setBookList(initialState);
  }, [initialState]);

  const handleUpdateList = (id: string, visibility: Visibility) => {
    let book = bookList.find((book) => book.id === id);
    if (book) {
      if (
        (book.isHidden && visibility === "hidden") ||
        (!book.isHidden && visibility === "visible")
      ) {
        return;
      }
      book.isHidden = !book?.isHidden;
      setBookList((prev) => [book!, ...prev.filter((item) => item.id !== id)]);
    }
  };


  const handleVisibilityClick = (id: string, visibility: Visibility) => {
    let book = bookList.find((book) => book.id === id);
    if (book) {
      book.isHidden = !book?.isHidden;
      setBookList((prev) => [book!, ...prev.filter((item) => item.id !== id)]);
    }
  };

  return {
    bookList,
    handleUpdateList,
    handleVisibilityClick
  };
};
