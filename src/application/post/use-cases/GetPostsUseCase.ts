import type { PostRepository } from "src/domain/post/post.repository";
import { PostView } from "../PostView";

export class GetPostsUseCase {
  constructor(private readonly postRepository: PostRepository) {}

  async execute(): Promise<PostView[]> {
    const posts = await this.postRepository.getPosts();
    return PostView.fromDomain(posts!);
  }
}