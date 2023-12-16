import { Body, Controller, Delete, Get, Patch, Post, Query } from '@nestjs/common';
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
  public async createProduct(@Body() productType: any) {
    return await this.productTypeService.saveProductType(productType);
  }

  @Patch('product-type')
  public async updateProduct(@Body() productType: any) {
    return await this.productTypeService.updateProductType(productType);
  }

  @Delete('product-type?:id')
  public async deleteProduct(@Query('id') id: number) {
    return await this.productTypeService.deleteProductType(id);
  }

}
