import { Args, Int, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { Author, Book, ResultUnion, User } from '@botomatic/models';

@Resolver(of => User)
export class UsersResolver {
  constructor(
    private usersService: UsersService
  ) {
  }

  @Query(returns => User)
  async user(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.findOneById(id);
    // return {
    //   id,
    // }
  }

  @Query(returns => [ResultUnion])
  search(): Array<typeof ResultUnion> {
    return [new Author(), new Book()];
  }
}
