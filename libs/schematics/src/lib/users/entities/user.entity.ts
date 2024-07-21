import { createUnionType, Field, Int, ObjectType } from '@nestjs/graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Author {
  name!: string;
}

@ObjectType()
@Entity()
export class Book {
  title!: string;
}

export const ResultUnion = createUnionType({
  name: 'ResultUnion',
  types: () => [Author, Book] as const
});

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  /**
   * `Introspected comment`
   */
  @Column({ nullable: true })
  firstName?: string;

  @Column({ nullable: true })
  lastName?: string;

  @Column()
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField!: number;
}
