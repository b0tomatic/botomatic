import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  findOneById(id: number) {
    return Promise.resolve(undefined);
  }
}
