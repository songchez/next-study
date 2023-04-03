export interface Post {
  title: string;
  _id: string;
  _createdAt: any;
  mainImage: string;
  body: any[];
  author: {
    _ref: string;
  };
}

// export interface Author {
//   name: string;
//   _id: string;
//   _createdAt: any;
//   image: string;
// }
