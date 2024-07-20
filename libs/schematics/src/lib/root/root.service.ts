import { Injectable } from '@nestjs/common';

@Injectable()
export class RootService {
  getData(): { message: string } {
    return { message: 'Hello API' };
  }
}
