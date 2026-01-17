import { LibraryBook } from "./types/LibraryBook";

const book1 = new LibraryBook({ title: "1984", author: "George Orwell", year: 1949 });
const book2 = new LibraryBook({ title: "Dune", author: "Frank Herbert", year: 1965 });

book1.borrow("Андрей");
book2.borrow("Маша");
