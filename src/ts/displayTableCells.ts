import createRow from "./createRow"; // Import the createRow function from the createRow module
import books from "./library"; // Import the books function from the library module

// Function to display table cells
const displayTableCells = (): void => {
  const library = books(); // Get the list of books from the library
  for (let i = 0; i < library.length; i++) { // Loop through each book in the library
    createRow(i, library); // Create a row for each book
  }
  // console.log(library.length); // Log the number of books in the library
};

export default displayTableCells; // Export the displayTableCells function as the default export
