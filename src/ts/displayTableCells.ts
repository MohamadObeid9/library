import createRow from "./createRow";
import books from "./library";

const displayTableCells = (): void => {
  const library = books();
  for (let i = 0; i < library.length; i++) {
    createRow(i, library);
  }
};

export default displayTableCells;
