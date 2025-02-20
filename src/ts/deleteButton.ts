const deleteButton = (parent: HTMLElement): void => {
  const button = document.createElement("button");

  button.textContent = "Delete";

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
  parent.appendChild(button);

  button.addEventListener("click", function () {
    const parentElement = this.parentElement?.parentElement as HTMLElement;

    parentElement.remove();
  });
};

export default deleteButton;
