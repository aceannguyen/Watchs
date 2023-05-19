import { Controller, Get } from '@nestjs/common';
import { Product } from 'src/schemas/product.schema';
import { BlogService } from './blog.service';
import { Blog } from 'src/schemas/blog.schema';

@Controller('blog')
export class BlogController {
  constructor(private readonly appService: BlogService) {}

  @Get('/all')
  async getAll(): Promise<Blog[]> {
    return await this.appService.findAll();
  }

  @Get('/create')
  async create() {
    return await this.appService.create();
  }
}
