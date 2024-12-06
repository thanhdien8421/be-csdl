import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { ResponseMessage } from 'src/decorators/customize';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  @ResponseMessage('Get product data successfully')
  getAllProduct() {
    return this.productService.findAll();
  }

  @Post()
  @ResponseMessage('Create product successfully')
  addProduct() {
    return this.productService.getHello();
  }

  @Patch()
  @ResponseMessage('Update product data successfully')
  updateProduct() {
    return this.productService.getHello()
  }

  @Delete(':id')
  @ResponseMessage('Remove product successfully')
  removeProductWithId(@Param('id') id: string) {
    return this.productService.getHello()
  }
}
