import { Test } from '@nestjs/testing';
import { LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [LoginService],
    }).compile();

    service = module.get(LoginService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
