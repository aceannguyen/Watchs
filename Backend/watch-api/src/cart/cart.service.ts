import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cart } from 'src/schemas/cart.schema';

@Injectable()
export class CartService {
  constructor(@InjectModel(Cart.name) private cartModel: Model<Cart>) {}

  async create(): Promise<Cart> {
    const createdCat = new this.cartModel({
        name: "test",
        description: "test",
        preview_path: "test",
        price: 1000,
        quantity: 1,
        rate: 5
    });
    return createdCat.save();
  }

  async findAll(): Promise<Cart[]> {
    return this.cartModel.find().exec();
  }
}
