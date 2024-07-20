import { Test } from '@nestjs/testing';

import { RootService } from './root.service';

describe('RootService', () => {
  let service: RootService;

  beforeAll(async () => {
    const root = await Test.createTestingModule({
      providers: [RootService],
    }).compile();

    service = root.get<RootService>(RootService);
  });

  describe('getData', () => {
    it('should return "Hello API"', () => {
      expect(service.getData()).toEqual({ message: 'Hello API' });
    });
  });
});
