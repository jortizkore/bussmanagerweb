import { Test } from '@nestjs/testing';
import { BussinessController } from './bussiness.controller';
import { BussinessService } from './bussiness.service';

describe('BussinessController', () => {
  let controller: BussinessController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [BussinessService],
      controllers: [BussinessController],
    }).compile();

    controller = module.get(BussinessController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
