import { Test, TestingModule } from '@nestjs/testing';
import { PumuService } from './pumu.service';

describe('PumuService', () => {
  let service: PumuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PumuService],
    }).compile();

    service = module.get<PumuService>(PumuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
