import { InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  /**
   * `Testing comments`
   */
  exampleField!: number;
}
