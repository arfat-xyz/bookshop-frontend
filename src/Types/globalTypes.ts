export type IProduct = {
  _id: string;
  title: string;
  author: string;
  genre: string;
  publication_date: string;
  reviews?: {
    name: string;
    email: string;
    image: string;
    comment: string;
  };
  addBy: string;
  image: string;
};
