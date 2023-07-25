import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { PartnerService } from './partner.service';

@Controller('partner')
export class PartnerController {
  constructor(private partnerService: PartnerService) {

  }

  @Get('/partners')
  public getPartners() {
    return this.partnerService.getPartners();
  }


  @Get('/partner/:id')
  public getPartner(@Param('id') id: string) {
    return this.partnerService.getPartner(id);
  }

  @Post('/partner')
  public addPartner(@Body() body: any) {
    const param = { data: body };
    console.log('BE data: ', param, body)
    return this.partnerService.createPartner(param);
  }

  @Patch('/partner')
  public updatePartner(@Body() body: any) {
    return this.partnerService.updatePartner(body);
  }

  @Delete('/partner/:id')
  public deletePartner(@Param('id') id: string) {
    return this.partnerService.deletePartner(id);
  }

}
