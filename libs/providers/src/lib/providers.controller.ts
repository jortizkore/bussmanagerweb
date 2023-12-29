import { Body, Controller, Delete, Get, Patch, Post, Query } from '@nestjs/common';
import { ProvidersService } from './providers.service';
import { BussinessService } from '@buss-manager-web/bussiness';

@Controller('providers')
export class ProvidersController {
  constructor(private providersService: ProvidersService, private bussinessService: BussinessService) { }


  @Get('bussiness-providers?:id')
  public async getBussinessProviders(@Query('id') bussinessId: string) {
    return this.bussinessService.getBussinessPrividers(bussinessId);
  }

  @Get('bussiness-provider?:id')
  public async getBussinessProvider(@Query('id') providerId: number) {
    return this.providersService.getProvider(providerId);
  }

  @Post('provider')
  public async saveProvider(@Body() provider: any) {
    return this.providersService.saveProvider(provider);
  }

  @Patch('provider')
  public async updateProvider(@Body() provider: any) {
    return this.providersService.updateProvider(provider);
  }

  @Delete('provider?:id')
  public async deleteProvider(@Query('id') providerId: number) {
    return this.providersService.removeProvider(providerId);
  }

}
