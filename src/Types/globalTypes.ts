export type IProduct = {
  _id: string;
  title: string;
  author: string;
  genre: string;
  publication_date: string;
  reviews?: [
    {
      email: string;
      comment: string;
    }
  ];
  addBy: string;
  image: string;
  finished?: boolean;
};

export type ICredentials = {
  email: string;
  password: string;
};
