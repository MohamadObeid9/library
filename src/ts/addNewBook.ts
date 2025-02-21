import addBookToLibrary from "./addBookToLibrary";

const addNewBook = () => {
  const dialog = document.querySelector("dialog") as HTMLDialogElement;
  const addBtn = document.querySelector("#add") as HTMLButtonElement;
  const showBtn = document.querySelector("#show") as HTMLButtonElement;
  const closeBtn = document.querySelector("#delete") as HTMLButtonElement;
  const author = document.querySelector("#author") as HTMLInputElement;
  const title = document.querySelector("#title") as HTMLInputElement;
  const pages = document.querySelector("#pages") as HTMLInputElement;
  const readStatus = document.querySelector("#readStatus") as HTMLInputElement;
  const header = document.querySelector(".header") as HTMLElement;

  showBtn.addEventListener("click", () => {
    dialog.show();
    header.classList.remove("sticky");
  });

  closeBtn.addEventListener("click", (e) => {
    dialog.close();
    e.preventDefault();
    author.value = "";
    title.value = "";
    pages.value = "";
    readStatus.value = "NO";
  });

  addBtn.addEventListener("click", (e) => {
    // Clear previous custom validity messages
    title.setCustomValidity("");
    author.setCustomValidity("");
    pages.setCustomValidity("");

    if (!title.validity.valid) {
      title.setCustomValidity("Please add a valid title");
    }
    if (!author.validity.valid) {
      author.setCustomValidity("Please add a valid author name");
    }
    if (!pages.validity.valid) {
      pages.setCustomValidity("Please add a valid pages number");
    }

    if (author.value && title.value && pages.value) {
      header.classList.add("sticky");
      addBookToLibrary(
        title.value,
        author.value,
        Number(pages.value),
        readStatus.value
      );
      e.preventDefault();
      author.value = "";
      title.value = "";
      pages.value = "";
      readStatus.value = "No";
      dialog.close();
    }
  });
};

export default addNewBook;
