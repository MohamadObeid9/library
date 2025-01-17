import createTd from "./createTd";
import Book from "./book";
import deleteButton from "./deleteButton";
import readButton from "./readButton";

// Function to create a row in the table
const createRow = (i: number, library?: Book[]): void => {
  // Select the table body element
  const table = document.querySelector("tbody") as HTMLTableSectionElement;

  // Log the length of the library array
  // console.log(library.length);

  // Create a new table row element
  const object = document.createElement("tr");
  object.classList.add("bg-indigo-950", "text-slate-500", "border-b");
  table.appendChild(object);

  // Create and append table data cells for author, title, and pages
  createTd(library[i].author, object, "font-black", "text-center", "text-lg");

  createTd(library[i].title, object, "text-center", "text-lg");

  createTd(library[i].pages.toString(), object, "text-center", "text-lg");

  // Create and append a table data cell for read status
  const readTd = document.createElement("td");
  readTd.classList.add("text-center", "text-lg");
  readTd.textContent = library[i].readStatus;
  object.appendChild(readTd);

  // Create and append a table data cell for action buttons
  const td = document.createElement("td");
  td.classList.add("flex", "justify-center");
  object.appendChild(td);

  // Add delete button to the action cell
  deleteButton(td);

  // Add read button to the action cell
  readButton(td, i, readTd, library);
};

export default createRow;
