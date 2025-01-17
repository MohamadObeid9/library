import Book from "./book";

// Function to create and append a read button to a parent element
const readButton = (
  parent: HTMLElement, // The parent element to which the button will be appended
  i: number, // Index of the book in the library array
  read: HTMLElement, // Element that displays the read status
  library: Book[] // Array of Book objects
): void => {
  const button = document.createElement("button"); // Create a new button element
  button.classList.add(
    "bg-sky-500",
    "text-slate-700",
    'font-bold',
    "px-10",
    "py-5",
    "w-100",
    "border-none",
    "m-4",
    "rounded-lg"
  );

  // Set button text based on the read status of the book
  if (library[i].readStatus === "Yes") {
    button.textContent = "Not Read";
  } else {
    button.textContent = "Mark Read";
  }

  parent.appendChild(button); // Append the button to the parent element

  // Add click event listener to the button
  button.addEventListener("click", () => {
    // Toggle button text and read status
    if (button.textContent === "Not Read") {
      button.textContent = "Mark Read";
      read.textContent = "No";
    } else {
      button.textContent = "Not Read";
      read.textContent = "Yes";
    }
  });
};

export default readButton;
