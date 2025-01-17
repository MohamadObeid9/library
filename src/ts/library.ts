import Book from "./book";

// Function to create and return an array of Book objects
const library = (): Book[] => {
  const library: Book[] = []; // Initialize an empty array to hold the books

  // Create book instances with title, author, pages, and availability status
  const book1 = new Book("The Alchemist", "Paulo Coelho", 445, "No");
  const book2 = new Book("The way of men", "Jack Donovan", 356, "Yes");
  const book3 = new Book("The Ambler Warning", "Robert Ludlum", 449, "No");
  const book4 = new Book("The Hobbit", "J.R.R. Tolkien", 295, "Yes");
  const book5 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, "No");
  const book6 = new Book("1984", "George Orwell", 328, "Yes");

  // Add the created book instances to the library array
  library.push(book1, book2, book3, book4, book5, book6);

  return library; // Return the array of books
};

export default library;
