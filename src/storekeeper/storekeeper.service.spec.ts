import { Test, TestingModule } from '@nestjs/testing';
import { StorekeeperService } from './storekeeper.service';

describe('StorekeeperService', () => {
  let service: StorekeeperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StorekeeperService],
    }).compile();

    service = module.get<StorekeeperService>(StorekeeperService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
