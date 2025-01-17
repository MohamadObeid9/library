export default class Book {
  title: string;
  author: string;
  pages: number;
  readStatus: string;
  constructor(
    title: string,
    author: string,
    pages: number,
    readStatus: string
  ) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
  }
}
