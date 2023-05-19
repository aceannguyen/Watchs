import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './product.service';
import { Product } from 'src/schemas/product.schema';

@Controller('test')
export class ProductsController {
  constructor(private readonly appService: ProductsService) {}

  @Get('/all')
  async getAll(): Promise<Product[]> {
    return await this.appService.findAll();
  }

  @Get('/create')
  async create() {
    return await this.appService.create();
  }
}
