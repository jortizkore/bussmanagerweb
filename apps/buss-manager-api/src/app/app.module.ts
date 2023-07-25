import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PartnerController, PartnerService } from '@buss-manager-web/partner';
import { BussinessController, BussinessService } from '@buss-manager-web/bussiness';


@Module({
  imports: [],
  controllers: [AppController, PartnerController, BussinessController],
  providers: [AppService, PartnerService, BussinessService],
})
export class AppModule { }
