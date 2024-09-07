const library = [];

const book1 = new Book("book1", "mo", 99, "No");
const book2 = new Book("book2", "mo", 99, "Yes");
const book3 = new Book("book3", "mo", 99, "No");
const book4 = new Book("book4", "mo", 99, "Yes");
const book5 = new Book("book5", "mo", 99, "No");
const book6 = new Book("book6", "mo", 99, "Yes");

library.push(book1, book2, book3, book4, book5, book6);

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

function addBookToLibrary() {}

const table = document.querySelector("table");

const createTd = (text, parent, style) => {
  const object = document.createElement("td");
  object.textContent = text;
  object.style.cssText = style;
  parent.appendChild(object);
};

const createRow = (i) => {
  const object = document.createElement("tr");
  object.style.cssText =
    "background-color:rgb(6, 6, 39);color:rgba(146, 140, 140, 0.877);border-bottom:1px solid grey;";
  table.appendChild(object);

  createTd(
    library[i].author,
    object,
    "font-weight:900;text-align:center;font-size:1.2em;"
  );
  createTd(library[i].title, object, "text-align:center;font-size:1.2em;");
  createTd(library[i].pages, object, "text-align:center;font-size:1.2em;");
  const readTd = document.createElement('td');
  readTd.style.cssText="text-align:center;font-size:1.2em;";
  readTd.textContent=library[i].readStatus;
  object.appendChild(readTd);
  const td = document.createElement("td");
  object.appendChild(td);
  deleteButton(td, i);
  readButton(td, i,readTd);
};

const deleteButton = (parent, i) => {
  const button = document.createElement("button");
  button.textContent = "Delete";
  button.style.cssText = "background-color:red;padding:1em;width:100px;border:none;margin:1em;border-radius:8px;";
  parent.appendChild(button);
  button.addEventListener("click", () => {
    table.deleteRow(i);
  });
};

const readButton = (parent, i,read) => {
  const button = document.createElement("button");
  button.style.cssText = "background-color:blue;padding:1em;width:100px;border:none;margin:1em;border-radius:8px;";
  if (library[i].readStatus == "Yes") {
    button.textContent = "Not Read";
  } else {
    button.textContent = "Mark Read";
  }
  parent.appendChild(button);
  button.addEventListener("click", () => {
    if (button.textContent == "Not Read") {
      button.textContent = "Mark Read";
      read.textContent = "No";
    } else {
      button.textContent = "Not Read";
      read.textContent = "Yes";
    }
  });
};

const displayTableCells = () => {
  for (let i = 0; i <library.length; i++) {
    createRow(i);
  }
};
displayTableCells();
