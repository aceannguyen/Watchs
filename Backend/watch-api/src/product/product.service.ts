import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from '../schemas/product.schema';

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product.name) private productModel: Model<Product>) {}

  async create(): Promise<Product> {
    const createdCat = new this.productModel({
        name: "test",
        description: "test",
        preview_path: "test",
        price: 1000,
        quantity: 1,
        rate: 5
    });
    return createdCat.save();
  }

  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }
}
