import type { PostRepository } from "src/domain/post/post.repository";
import { PostView } from "../PostView";
import { PostDetailsView } from "../PostDetailsView";

export class GetPostDetailsUseCase {
  constructor(private readonly postRepository: PostRepository) {}

  async execute(path:string): Promise<PostView> {
    const post = await this.postRepository.getPost(path);
    return PostDetailsView.fromDomain(post);
  }
}