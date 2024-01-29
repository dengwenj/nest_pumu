import { Test, TestingModule } from '@nestjs/testing';
import { PumuController } from './pumu.controller';

describe('PumuController', () => {
  let controller: PumuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PumuController],
    }).compile();

    controller = module.get<PumuController>(PumuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
