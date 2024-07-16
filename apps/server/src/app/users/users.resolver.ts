import { User } from './models/user.model';
import { Args, Int, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';

@Resolver(of => User)
export class UsersResolver {
  constructor(
    private usersService: UsersService
  ) {
  }

  @Query(returns => User)
  async user(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.findOneById(id);
  }
}
