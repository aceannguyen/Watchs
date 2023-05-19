import { Controller, Get } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Customer } from 'src/schemas/customer.schema';

@Controller('customer')
export class CustomerController {
  constructor(private readonly appService: CustomerService) {}

  @Get('/all')
  async getAll(): Promise<Customer[]> {
    return await this.appService.findAll();
  }

  @Get('/create')
  async create() {
    return await this.appService.create();
  }
}
