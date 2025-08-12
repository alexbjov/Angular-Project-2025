export interface Comment {
  id: number,
  author: string,
  title: string,
  description: string,
  likes: number,
  dislikes: number,
  bookId: number;
}
