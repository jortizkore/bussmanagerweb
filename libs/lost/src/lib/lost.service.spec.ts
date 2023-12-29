import { Test } from '@nestjs/testing';
import { LostService } from './lost.service';

describe('LostService', () => {
  let service: LostService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [LostService],
    }).compile();

    service = module.get(LostService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
