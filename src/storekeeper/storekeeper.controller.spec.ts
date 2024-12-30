import { Test, TestingModule } from '@nestjs/testing';
import { StorekeeperController } from './storekeeper.controller';

describe('StorekeeperController', () => {
  let controller: StorekeeperController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StorekeeperController],
    }).compile();

    controller = module.get<StorekeeperController>(StorekeeperController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
