import { Test } from '@nestjs/testing';
import { ProductTypeController } from './product-type.controller';
import { ProductTypeService } from './product-type.service';

describe('ProductTypeController', () => {
  let controller: ProductTypeController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ProductTypeService],
      controllers: [ProductTypeController],
    }).compile();

    controller = module.get(ProductTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
