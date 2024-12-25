const library = [];

class Book {
  constructor(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
  }
}
//always initsialze classes before using them
const book1 = new Book("The Alchemist", "Paulo Coelho", 445, "No");
const book2 = new Book("The way of men", "Jack Donovan", 356, "Yes");
const book3 = new Book("The Ambler Warning", "Robert Ludlum", 449, "No");
const book4 = new Book("The Hobbit", "J.R.R. Tolkien", 295, "Yes");
const book5 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, "No");
const book6 = new Book("1984", "George Orwell", 328, "Yes");

library.push(book1, book2, book3, book4, book5, book6);

// class Book {
//   constructor(title, author, pages, readStatus) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.readStatus = readStatus;
//   }
// }

function addBookToLibrary(title, author, pages, readStatus) {
  const newBook = new Book(title, author, pages, readStatus);
  library.push(newBook);
  createRow(library.length - 1);
}

const table = document.querySelector("tbody");

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
  const readTd = document.createElement("td");
  readTd.style.cssText = "text-align:center;font-size:1.2em;";
  readTd.textContent = library[i].readStatus;
  object.appendChild(readTd);
  const td = document.createElement("td");
  td.style.cssText = "display:flex;justify-content:center";
  object.appendChild(td);
  deleteButton(td);
  readButton(td, i, readTd);
};

const deleteButton = (parent) => {
  const button = document.createElement("button");
  button.textContent = "Delete";
  button.style.cssText =
    "background-color:red;padding:1em;width:100px;border:none;margin:1em;border-radius:8px;";
  parent.appendChild(button);
  button.addEventListener("click", function () {
    this.parentElement.parentElement.remove();
  });
};

const readButton = (parent, i, read) => {
  const button = document.createElement("button");
  button.style.cssText =
    "background-color:lightskyblue;padding:1em;width:100px;border:none;margin:1em;border-radius:8px;";
  if (library[i].readStatus === "Yes") {
    button.textContent = "Not Read";
  } else {
    button.textContent = "Mark Read";
  }
  parent.appendChild(button);
  button.addEventListener("click", () => {
    if (button.textContent === "Not Read") {
      button.textContent = "Mark Read";
      read.textContent = "No";
    } else {
      button.textContent = "Not Read";
      read.textContent = "Yes";
    }
  });
};

const displayTableCells = () => {
  for (let i = 0; i < library.length; i++) {
    createRow(i);
  }
};
displayTableCells();

const dialog = document.querySelector("dialog");
const addBtn = document.querySelector("#add");
const showBtn = document.querySelector("#show");
const closeBtn = document.querySelector("#delete");

showBtn.addEventListener("click", () => {
  dialog.show();
});

closeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  dialog.close();
});

addBtn.addEventListener("click", () => {
  const author = document.querySelector("#author").value;
  const title = document.querySelector("#title").value;
  const pages = Number(document.querySelector("#pages").value);
  const readStatus = document.querySelector("#readStatus").value;
  addBookToLibrary(title, author, pages, readStatus);
});
