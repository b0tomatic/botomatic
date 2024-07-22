import { Test, TestingModule } from '@nestjs/testing';

import { RootController } from './root.controller';
import { RootService } from './root.service';

describe('RootController', () => {
  let root: TestingModule;

  beforeAll(async () => {
    root = await Test.createTestingModule({
      controllers: [RootController],
      providers: [RootService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Hello API"', () => {
      const rootController = root.get<RootController>(RootController);
      expect(rootController.getData()).toEqual({ message: 'Hello API' });
    });
  });
});
