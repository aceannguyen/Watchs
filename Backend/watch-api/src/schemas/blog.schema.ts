import { Prop, Schema, SchemaFactory, MongooseModuleOptions } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type BlogDocument = HydratedDocument<Blog>;

@Schema()
export class Blog {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  preview_path: string;

  @Prop({
    type: Date,
    default: Date.now()
  })
  deleted_at: Date;

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
  
}

export const BlogSchema = SchemaFactory.createForClass(Blog);