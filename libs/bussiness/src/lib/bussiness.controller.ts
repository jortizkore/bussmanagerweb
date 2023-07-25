import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { BussinessService } from './bussiness.service';

@Controller('bussiness')
export class BussinessController {
  constructor(private bussinessService: BussinessService) { }

  @Get('/bussiness')
  public getBussiness() {
    return this.bussinessService.getBussiness();
  }

  @Get('/bussiness/:id')
  public getBussinessById(@Param('id') id: string) {
    return this.bussinessService.getBussinessById(id);
  }

  @Post('/bussiness')
  public createBussiness(@Body() bussiness: any) {

    return this.bussinessService.createBussiness(bussiness)
  }

  @Patch('/bussiness')
  public updateBussiness(@Body() bussiness: any) {
    return this.bussinessService.patchBussiness(bussiness)
  }

  @Delete('/bussiness/:id')
  public deleteBussinessById(@Param('id') id: string) {
    return this.bussinessService.removeBussiness(id);
  }


}
