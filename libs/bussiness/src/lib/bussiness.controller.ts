import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { BussinessService } from './bussiness.service';

@Controller('bussiness')
export class BussinessController {
  constructor(private bussinessService: BussinessService) { }

  // TODO: just admins can access this
  // gets all bussinesses
  @Get('bussiness')
  public getBussiness() {
    return this.bussinessService.getBussiness();
  }

  // gets a bussiness by id
  @Get('bussiness?:id')
  public getBussinessById(@Query('id') id: string) {
    console.log('wrong call?');
    return this.bussinessService.getBussinessById(id);
  }

  // gets a bussiness by id
  @Post('bussiness-by-partner')
  public getBussinessByPartnerId(@Body() request: any) {
    console.log('hit: ', request);
    const id = request.id;
    return this.bussinessService.getBussinessByPartnerId(id);
  }

  // creates a bussiness
  @Post('bussiness')
  public createBussiness(@Body() bussiness: any) {
    return this.bussinessService.createBussiness(bussiness)
  }

  // updates a bussiness
  @Patch('bussiness')
  public updateBussiness(@Body() bussiness: any) {
    return this.bussinessService.patchBussiness(bussiness)
  }

  // Removes a bussiness by id (Not in use)
  @Delete('/bussiness?:id')
  public deleteBussinessById(@Query('id') id: string) {
    return this.bussinessService.removeBussiness(id);
  }


}
