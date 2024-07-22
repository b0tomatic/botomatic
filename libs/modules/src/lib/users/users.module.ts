import { Module } from '@nestjs/common';
import { UsersResolver } from '@botomatic/resolvers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@botomatic/entities';
import { UsersService } from '@botomatic/services';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersResolver, UsersService]
})
export class UsersModule {
}
