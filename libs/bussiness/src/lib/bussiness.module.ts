import { Module } from '@nestjs/common';
import { BussinessController } from './bussiness.controller';
import { BussinessService } from './bussiness.service';

@Module({
  controllers: [BussinessController],
  providers: [BussinessService],
  exports: [BussinessService],
})
export class BussinessModule {}
