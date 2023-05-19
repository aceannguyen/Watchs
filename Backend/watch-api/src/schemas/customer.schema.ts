import { Prop, Schema, SchemaFactory, MongooseModuleOptions } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type CustomerDocument = HydratedDocument<Customer>;

@Schema()
export class Customer {
  @Prop()
  name: string;

  @Prop()
  avatar_url: string;

  @Prop()
  password: string;

  @Prop()
  phone: string;

  @Prop()
  address: number;

  @Prop()
  email: number;

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

export const CustomerSchema = SchemaFactory.createForClass(Customer);