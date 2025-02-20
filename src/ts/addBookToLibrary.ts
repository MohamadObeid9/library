import Book from "./book";
import books from "./library";
import createRow from "./createRow";

const addBookToLibrary = (
  title: string,
  author: string,
  pages: number,
  readStatus: string
): void => {
  const library = books();

  const newBook = new Book(title, author, pages, readStatus);

  library.push(newBook);

  createRow(library.length - 1, library);
};

export default addBookToLibrary;
