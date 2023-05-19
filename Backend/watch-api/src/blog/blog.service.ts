import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Blog } from 'src/schemas/blog.schema';

@Injectable()
export class BlogService {
  constructor(@InjectModel(Blog.name) private blogModel: Model<Blog>) {}

  async create(): Promise<Blog> {
    const createdCat = new this.blogModel({
        name: "test",
        description: "test",
        preview_path: "test",
        price: 1000,
        quantity: 1,
        rate: 5
    });
    return createdCat.save();
  }

  async findAll(): Promise<Blog[]> {
    return this.blogModel.find().exec();
  }
}
