export class Repository<T> {
  private items: T[];

  constructor(initial: T[] = []) {
    this.items = [...initial];
  }

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return [...this.items];
  }
}
