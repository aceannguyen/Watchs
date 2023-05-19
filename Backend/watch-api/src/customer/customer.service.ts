import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cart } from 'src/schemas/cart.schema';
import { Customer } from 'src/schemas/customer.schema';

@Injectable()
export class CustomerService {
  constructor(@InjectModel(Customer.name) private customerModel: Model<Customer>) {}

  async create(): Promise<Customer> {
    const createdCat = new this.customerModel({
        name: "test",
        description: "test",
        preview_path: "test",
        price: 1000,
        quantity: 1,
        rate: 5
    });
    return createdCat.save();
  }

  async findAll(): Promise<Customer[]> {
    return this.customerModel.find().exec();
  }
}
