import { Test } from '@nestjs/testing';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';

describe('LoginController', () => {
  let controller: LoginController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [LoginService],
      controllers: [LoginController],
    }).compile();

    controller = module.get(LoginController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
