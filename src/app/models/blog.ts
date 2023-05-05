import { Post } from "./post";

export interface Blog {
  id: number;
  name: string;
  author: string;
  synopsis: string;

  posts: Post[];
}
