import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from '../schemas/product.schema';
import { Admin } from 'src/schemas/admin.schema';

@Injectable()
export class AdminService {
  constructor(@InjectModel(Admin.name) private adminModel: Model<Admin>) {}

  async create(data: any): Promise<Admin> {

    const createdAdmin = new this.adminModel({
        name: data.name,
        avatar_path: data.avartar,
        email: data.email,
        password: data.password
    });

    return createdAdmin.save();
  }

  async findAll(): Promise<Admin[]> {
    return this.adminModel.find().exec();
  }
}
