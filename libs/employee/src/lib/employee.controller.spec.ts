import { Test } from '@nestjs/testing';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';

describe('EmployeeController', () => {
  let controller: EmployeeController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [EmployeeService],
      controllers: [EmployeeController],
    }).compile();

    controller = module.get(EmployeeController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
