import type { Book } from "./Book";
import type { Borrowable } from "./Borrowable";

export class LibraryBook implements Borrowable {
  constructor(public info: Book) {}

  borrow(userName: string): void {
    console.log(`Книга "${this.info.title}" выдана пользователю ${userName}`);
  }
}
