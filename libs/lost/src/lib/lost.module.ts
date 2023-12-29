import { Module } from '@nestjs/common';
import { LostController } from './lost.controller';
import { LostService } from './lost.service';

@Module({
  controllers: [LostController],
  providers: [LostService],
  exports: [LostService],
})
export class LostModule {}
