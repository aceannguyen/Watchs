import { Prop, Schema, SchemaFactory, MongooseModuleOptions } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop()
  name: string;

  @Prop()
  preview_path: string;

  @Prop()
  price: number;

  @Prop()
  description: string;

  @Prop()
  quantity: number;

  @Prop()
  rate: number;

  @Prop({
    type: Date,
    default: Date.now()
  })
  created_at: Date;

  @Prop({
    type: Date,
    default: Date.now()
  })
  updated_at: Date;

  @Prop({
    type: Date,
    default: Date.now()
  })
  deleted_at: Date;
  
}

export const ProductSchema = SchemaFactory.createForClass(Product);