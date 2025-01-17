import addBookToLibrary from "./addBookToLibrary";

// Function to handle adding a new book
const addNewbook = () => {
  // Get the dialog element
  const dialog = document.querySelector("dialog") as HTMLDialogElement;
  // Get the add button element
  const addBtn = document.querySelector("#add") as HTMLButtonElement;
  // Get the show button element
  const showBtn = document.querySelector("#show") as HTMLButtonElement;
  // Get the close button element
  const closeBtn = document.querySelector("#delete") as HTMLButtonElement;

  // Add event listener to show button to display the dialog
  showBtn.addEventListener("click", () => {
    dialog.show();
  });

  // Add event listener to close button to close the dialog
  closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.close();
  });

  // Add event listener to add button to add a new book
  addBtn.addEventListener("click", () => {
    // Get the author input value
    const author = (document.querySelector("#author") as HTMLInputElement).value;
    // Get the title input value
    const title = (document.querySelector("#title") as HTMLInputElement).value;
    // Get the pages input value and convert it to a number
    const pages = Number((document.querySelector("#pages") as HTMLInputElement).value);
    // Get the read status input value
    const readStatus = (document.querySelector("#readStatus") as HTMLInputElement).value;
    // Add the new book to the library
    addBookToLibrary(title, author, pages, readStatus);
  });
};

export default addNewbook;
