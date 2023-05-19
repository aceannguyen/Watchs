import { Controller, Get } from '@nestjs/common';
import { Cart } from 'src/schemas/cart.schema';
import { CartService } from './cart.service';

@Controller('cart')
export class CartController {
  constructor(private readonly appService: CartService) {}

  @Get('/all')
  async getAll(): Promise<Cart[]> {
    return await this.appService.findAll();
  }

  @Get('/create')
  async create() {
    return await this.appService.create();
  }
}
