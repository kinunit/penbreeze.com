import type { Post } from "./Post";

export interface PostRepository {
  getPosts(): Promise<Post[]>;
  getPost(): Promise<Post>;
}