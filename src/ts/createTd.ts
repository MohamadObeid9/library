const createTd = (
  text: string,
  parent: HTMLElement,
  ...styles: string[]
): void => {
  // Create a new td element
  const object = document.createElement("td");

  // Set the text content of the td element
  object.textContent = text;

  // Apply the specified CSS style to the td element using tailwind class
  styles.forEach((style) => {
    object.classList.add(style);
  });

  // Append the td element to the parent element
  parent.appendChild(object);
};

export default createTd;
