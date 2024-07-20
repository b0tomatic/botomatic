import { Injectable } from '@nestjs/common';
import { User } from '@botomatic/models';

@Injectable()
export class UsersService {
  findOneById(id: number): User {
    return {
      id,
      firstName: 'John',
      lastName: 'Doe'
    };
  }
}
