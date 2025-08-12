export interface Book {
  id: number,
  title: string,
  author: string,
  year: number,
  pages: number,
  likes: number,
  dislikes: number;
  createdOn?: number;
  updatedOn?: number;
}
