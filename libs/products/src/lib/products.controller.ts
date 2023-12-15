import { Body, Controller, Delete, Get, Patch, Post, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { product } from '@prisma/client';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) { }


  @Get('/products?bussinessId')
  public async getBussinessProducts(@Query() bussinessId: string) {
    return await this.productsService.getAllBussinessProducts(bussinessId);
  }

  @Get('/products?bussinessId&?type')
  public async getBussinessProductsByType(@Query() bussinessId: string, @Query() type: number) {
    return await this.productsService.getAllBussinessProductsByCathegory(bussinessId, type);
  }

  @Post('/products')
  public addProduct(@Body() product: product) {
    return this.productsService.saveProduct(product);
  }

  @Patch('/products')
  public async updateProduct(@Body() product: product){
    return await this.productsService.updateProduct(product);
  }

  @Delete('/products?id')
  public async deleteProduct(@Query() id: string ) {
    return await this.productsService.deleteProduct(id);
  }

}
