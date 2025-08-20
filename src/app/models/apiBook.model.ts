export interface ApiBook {
  _id: string,
  imageUrl: string,
  title: string,
  author: string, // author of a book
  year: number, // publish year
  pages: number,
  description: string,
  genre: string,
  _ownerId: string,
  likes: string[], // users who liked the book
  dislikes: string[], // users who disliked the book
  _createdOn: number
}
