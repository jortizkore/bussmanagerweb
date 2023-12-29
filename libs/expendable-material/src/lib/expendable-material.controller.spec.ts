import { Test } from '@nestjs/testing';
import { ExpendableMaterialController } from './expendable-material.controller';
import { ExpendableMaterialService } from './expendable-material.service';

describe('ExpendableMaterialController', () => {
  let controller: ExpendableMaterialController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ExpendableMaterialService],
      controllers: [ExpendableMaterialController],
    }).compile();

    controller = module.get(ExpendableMaterialController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
