import { Test } from '@nestjs/testing';
import { BussinessService } from './bussiness.service';

describe('BussinessService', () => {
  let service: BussinessService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [BussinessService],
    }).compile();

    service = module.get(BussinessService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
