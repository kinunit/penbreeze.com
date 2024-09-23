import type { Author } from "./Author";

export interface AuthorRepository {
    getAuthor(id:number): Promise<Author|null>
}