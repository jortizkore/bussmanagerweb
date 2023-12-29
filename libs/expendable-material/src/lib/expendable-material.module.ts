import { Module } from '@nestjs/common';
import { ExpendableMaterialController } from './expendable-material.controller';
import { ExpendableMaterialService } from './expendable-material.service';

@Module({
  controllers: [ExpendableMaterialController],
  providers: [ExpendableMaterialService],
  exports: [ExpendableMaterialService],
})
export class ExpendableMaterialModule {}
