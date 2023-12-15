import { Test } from '@nestjs/testing';
import { ProductTypeService } from './product-type.service';

describe('ProductTypeService', () => {
  let service: ProductTypeService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ProductTypeService],
    }).compile();

    service = module.get(ProductTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
