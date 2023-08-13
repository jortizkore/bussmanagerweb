import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { PartnerService } from './partner.service';

@Controller('partner')
export class PartnerController {
  constructor(private partnerService: PartnerService) {

  }

  @Get('/partners')
  public getPartners() {
    return this.partnerService.getPartners();
  }

  // gets a partner by id
  @Get('/partner?:id')
  public getPartner(@Query('id') id: string) {
    return this.partnerService.getPartner(id);
  }

  //create a new partner
  @Post('/partner')
  public addPartner(@Body() body: any) {
    const param = { data: body };
    console.log('BE data: ', param, body)
    return this.partnerService.createPartner(param);
  }

  //update a partner
  @Patch('/partner')
  public updatePartner(@Body() body: any) {
    return this.partnerService.updatePartner(body);
  }


  // * Removes a partner ( not in use)
  @Delete('/partner?:id')
  public deletePartner(@Query('id') id: string) {
    return this.partnerService.deletePartner(id);
  }

}
