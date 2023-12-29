import { Controller, Get, Query, Body, Post, Patch, Delete } from '@nestjs/common';
import { ExpendableMaterialService } from './expendable-material.service';
import { BussinessService } from '@buss-manager-web/bussiness';

@Controller('expendable-material')
export class ExpendableMaterialController {
  constructor(private expendableMaterialService: ExpendableMaterialService, private bussinessService: BussinessService) { }

  @Get('bussiness-expendable-materials?:id')
  public async getBussinessExpendableMaterials(@Query('id') bussinessId: string) {
    return this.bussinessService.getBussinessExpandableMaterials(bussinessId);
  }

  @Get('expandable-material?:id')
  public async getExpandableMaterial(@Body() expMaterialId: number) {
    return this.expendableMaterialService.getExpMaterial(expMaterialId);
  }

  @Post('expandable-material')
  public async saveExpandableMaterial(@Body() expMaterial: any) {
    return this.expendableMaterialService.saveExpMaterial(expMaterial);
  }

  @Patch('expandable-material')
  public async updateExpendableMaterial(@Body() expMaterial: any) {
    return this.expendableMaterialService.updateExpMaterial(expMaterial);
  }

  @Delete('expandable-material?:id')
  public async deleteExpendableMaterial(@Query('id') expMaterialId: number) {
    return this.expendableMaterialService.deleteExpMaterial(expMaterialId);
  }

}
