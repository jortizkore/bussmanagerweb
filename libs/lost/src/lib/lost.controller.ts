import { Body, Controller, Delete, Get, Patch, Post, Query } from '@nestjs/common';
import { LostService } from './lost.service';
import { BussinessService } from '@buss-manager-web/bussiness';

@Controller('lost')
export class LostController {
  constructor(private lostService: LostService, private bussinessService: BussinessService) { }

  @Get('bussiness-losts?:id')
  public async GetBussinessLosts(@Query('id') bussinessId: string) {
    return this.bussinessService.getBussinessLosts(bussinessId);
  }

  @Get('lost?:id')
  public async GetBussinessLost(@Query('id') lostId: number) {
    return this.lostService.getLost(lostId);
  }

  @Post('lost')
  public async saveLost(@Body() lost: any) {
    return this.lostService.saveLost(lost);
  }

  @Patch('lost')
  public async updateLost(@Body() lost: any) {
    return this.lostService.updateLost(lost);
  }

  @Delete('lost?:id')
  public async deleteLost(@Query('id') id: number) {
    return this.lostService.deleteLost(id);
  }


}
