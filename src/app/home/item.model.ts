export class Item {
  id: number;
  title: string;
  parent_id: number;

  constructor(
    id: number = 0,
    title: string,
    parent_id: number = null
  ) {
    this.id = id;
    this.title = title;
    this.parent_id = parent_id;
  }
}
