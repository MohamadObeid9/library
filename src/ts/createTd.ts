const createTd = (
  text: string,
  parent: HTMLElement,
  ...styles: string[]
): void => {
  const object = document.createElement("td");

  object.textContent = text;

  styles.forEach((style) => {
    object.classList.add(style);
  });

  parent.appendChild(object);
};

export default createTd;
