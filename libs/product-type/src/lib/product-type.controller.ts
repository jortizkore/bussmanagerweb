import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ProductTypeService } from './product-type.service';

@Controller('product-type')
export class ProductTypeController {
  constructor(private productTypeService: ProductTypeService) { }

  @Get('product-types')
  public async getProductTypes() {
    return await this.productTypeService.getProductTypes();
  }

  @Get('products?:typeId')
  public async getProductsByType(@Query('typeId') typeId: number) {
    return await this.productTypeService.getProductsByType(typeId);
  }

  @Post('product-type')
  public async createProductType(@Body() productType: any) {
    return await this.productTypeService.saveProductType(productType);
  }

  @Patch('product-type')
  public async updateProductType(@Body() productType: any) {
    return await this.productTypeService.updateProductType(productType);
  }

  @Delete('product-type/:id') // * use param instead of query to get query params
  public async deleteProductType(@Param('id') id: number) {
    console.log(`this is the deleted ID: ${id}`);
    return await this.productTypeService.deleteProductType(id);
  }

}
