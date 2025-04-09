const deleteButton = (parent: HTMLElement): void => {
  const button = document.createElement("button");

  button.textContent = "Delete";

  button.classList.add(
    "bg-red-500",
    "text-slate-700",
    "font-bold",
    "px-5",
    "py-1",
    "md:px-10",
    "md:py-5",
    "border-none",
    "m-1",
    "md:m-4",
    "rounded-lg"
  );
  parent.appendChild(button);

  button.addEventListener("click", function () {
    const parentElement = this.parentElement?.parentElement as HTMLElement;

    parentElement.remove();
  });
};

export default deleteButton;
