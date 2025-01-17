import Book from "./book";
import books from "./library";
import createRow from "./createRow";

const addBookToLibrary = (
  title: string,
  author: string,
  pages: number,
  readStatus: string
): void => {
  // Retrieve the current library of books
  const library = books();

  // Create a new book instance with the provided details
  const newBook = new Book(title, author, pages, readStatus);

  // Add the new book to the library
  library.push(newBook);

  // Update the display with the new book entry
  createRow(library.length - 1, library);
};

export default addBookToLibrary;
