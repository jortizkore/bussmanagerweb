import { Test } from '@nestjs/testing';
import { ExpendableMaterialService } from './expendable-material.service';

describe('ExpendableMaterialService', () => {
  let service: ExpendableMaterialService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ExpendableMaterialService],
    }).compile();

    service = module.get(ExpendableMaterialService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
