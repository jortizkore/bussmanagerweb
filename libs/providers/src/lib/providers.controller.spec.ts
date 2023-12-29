import { Test } from '@nestjs/testing';
import { ProvidersController } from './providers.controller';
import { ProvidersService } from './providers.service';

describe('ProvidersController', () => {
  let controller: ProvidersController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ProvidersService],
      controllers: [ProvidersController],
    }).compile();

    controller = module.get(ProvidersController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
