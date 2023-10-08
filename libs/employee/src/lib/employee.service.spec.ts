import { Test } from '@nestjs/testing';
import { EmployeeService } from './employee.service';

describe('EmployeeService', () => {
  let service: EmployeeService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [EmployeeService],
    }).compile();

    service = module.get(EmployeeService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
