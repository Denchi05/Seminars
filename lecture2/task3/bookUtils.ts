import type { Book } from "./types/Book";
import { Repository } from "./types/Repository";

export function updateBook(book: Book, updates: Partial<Book>): Book {
  return { ...book, ...updates };
}

export function getReadonlyBooks(repo: Repository<Book>): Readonly<Book>[] {
  const frozen = repo.getAll().map((b) => Object.freeze({ ...b }));
  return Object.freeze(frozen) as Readonly<Book>[];
}
