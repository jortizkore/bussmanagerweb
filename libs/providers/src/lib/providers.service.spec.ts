import { Test } from '@nestjs/testing';
import { ProvidersService } from './providers.service';

describe('ProvidersService', () => {
  let service: ProvidersService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ProvidersService],
    }).compile();

    service = module.get(ProvidersService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
