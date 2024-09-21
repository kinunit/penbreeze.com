import { PostService } from "src/application/post/use-cases";
import { PostResource } from "src/infrastructure/post/post.resource";
import { RestClient } from "src/infrastructure/RestClient";

export const postService = new PostService(new PostResource(new RestClient()));