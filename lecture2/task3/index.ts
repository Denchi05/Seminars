import type { Book } from "./types/Book";
import { LibraryBook } from "./types/LibraryBook";
import { Repository } from "./types/Repository";
import { updateBook, getReadonlyBooks } from "./bookUtils";

const book1: Book = { title: "1984", author: "George Orwell", year: 1949 };
const book2: Book = { title: "Dune", author: "Frank Herbert", year: 1965 };

new LibraryBook(book1).borrow("Андрей");

const repo = new Repository<Book>([book1, book2]);
repo.add({ title: "Clean Code", author: "Robert C. Martin", year: 2008 });

console.log(repo.getAll());

console.log(updateBook(book1, { year: 1950 }));

const readonlyBooks = getReadonlyBooks(repo);
console.log(readonlyBooks);
