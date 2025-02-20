import createTd from "./createTd";
import Book from "./book";
import deleteButton from "./deleteButton";
import readButton from "./readButton";

const createRow = (i: number, library?: Book[]): void => {
  const table = document.querySelector("tbody") as HTMLElement;

  const object = document.createElement("tr");
  object.classList.add("bg-indigo-950", "text-slate-500", "border-b");
  table.appendChild(object);

  createTd(library[i].author, object, "font-black", "text-center", "text-lg");
  createTd(library[i].title, object, "text-center", "text-lg");
  createTd(library[i].pages.toString(), object, "text-center", "text-lg");

  const readTd = document.createElement("td");
  readTd.classList.add("text-center", "text-lg");
  readTd.textContent = library[i].readStatus;
  object.appendChild(readTd);

  const td = document.createElement("td");
  td.classList.add("flex", "justify-center");
  object.appendChild(td);

  deleteButton(td);
  readButton(td, i, readTd, library);
};

export default createRow;
