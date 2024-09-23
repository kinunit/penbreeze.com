import type { Author } from "src/domain/author/Author";

export class AuthorView {
    constructor(
        private readonly id:number,
        private readonly firstName:string,
        private readonly lastName:string,
    ) {}

    static fromDomain(author:Author) {
        const AuthorProperties = author.properties;

        return new AuthorView (
            AuthorProperties.id,
            AuthorProperties.firstName,
            AuthorProperties.lastName,
        );
    }

    get fullName() {
        return `${this.firstName}, ${this.lastName}`;
    }
}