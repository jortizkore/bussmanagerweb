import { Test } from '@nestjs/testing';
import { LostController } from './lost.controller';
import { LostService } from './lost.service';

describe('LostController', () => {
  let controller: LostController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [LostService],
      controllers: [LostController],
    }).compile();

    controller = module.get(LostController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
