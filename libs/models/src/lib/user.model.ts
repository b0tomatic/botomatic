import { createUnionType, Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Author {
  name!: string;
}

@ObjectType()
export class Book {
  title!: string;
}

export const ResultUnion = createUnionType({
  name: 'ResultUnion',
  types: () => [Author, Book] as const
});

@ObjectType()
export class User {
  id!: number;
  /**
   * `Introspected comment`
   */
  firstName?: string;
  lastName?: string;
}
