import type { IAuthorProperties } from "./author.types";

export class Author {
    constructor(
        private readonly id:number,
        private readonly firstName:string,
        private readonly lastName:string
    ){}

    static fromProperties(properties:IAuthorProperties):Author {
        return new Author (
            properties.id,
            properties.firstName,
            properties.lastName
        );
    }

    get properties():IAuthorProperties {
        return {
            id: this.id,
            firstName: this.firstName,
            lastName: this.lastName
        }
    }
}