import { Body, Controller, Get, Post } from '@nestjs/common';
import { Product } from 'src/schemas/product.schema';
import { AdminService } from './admin.service';
import { Admin } from 'src/schemas/admin.schema';

@Controller('admin')
export class AdminController {
  constructor(private readonly appService: AdminService) {}

  @Get('/all')
  async getAll(): Promise<Admin[]> {
    return await this.appService.findAll();
  }

  @Post('/create')
  async create(@Body() data: any) {

    return await this.appService.create(data);
  }
}
