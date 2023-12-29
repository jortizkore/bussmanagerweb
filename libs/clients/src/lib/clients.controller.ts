import { Body, Controller, Delete, Get, Patch, Post, Query } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { BussinessService } from '@buss-manager-web/bussiness';
import { client } from '@prisma/client';

@Controller('clients')
export class ClientsController {

  constructor(private clientsService: ClientsService, private bussinessService: BussinessService) { }


  @Get('bussiness-clients?:id')
  public async GetClients(@Query('id') id: string) {
    return await this.bussinessService.getBussinessClients(id);
  }

  @Get('client?:id')
  public async GetClient(@Query('id') id: number) {
    return await this.clientsService.getClient(id);
  }

  @Post('client')
  public async SaveClient(@Body() client: client) {
    return await this.clientsService.saveClient(client);
  }

  @Patch('client')
  public async UpdateClient(@Body() client: client) {
    return await this.clientsService.updateClient(client);
  }

  @Delete('client?:id')
  public async DeleteClient(@Query('id') id: number) {
    return await this.clientsService.removeClient(id);
  }

}
