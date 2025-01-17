const deleteButton = (parent: HTMLElement): void => {
  // Create a new button element
  const button = document.createElement("button");

  // Set the button's text content to "Delete"
  button.textContent = "Delete";

  // Apply CSS styles to the button
  // button.style.cssText =
  //   "background-color:red;padding:1em;width:100px;border:none;margin:1em;border-radius:8px;";

  button.classList.add(
    "bg-red-600",
    "text-slate-700",
    "font-bold",
    "px-10",
    "py-5",
    "w-100",
    "border-none",
    "m-4",
    "rounded-lg"
  );
  // Append the button to the parent element
  parent.appendChild(button);

  // Add a click event listener to the button
  button.addEventListener("click", function () {
    // Get the grandparent element of the button
    const parentElement = this.parentElement?.parentElement as HTMLElement;

    // Remove the grandparent element from the DOM
    parentElement.remove();
  });
};

export default deleteButton;
