import { AuthorService } from "src/application/author";
import { AuthorResource } from "src/infrastructure/author/author.resource";
import { RestClient } from "src/infrastructure/RestClient";

export const authorService = new AuthorService(new AuthorResource(new RestClient()));