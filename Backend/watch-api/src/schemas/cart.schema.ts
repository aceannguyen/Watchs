import { Prop, Schema, SchemaFactory, MongooseModuleOptions } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type CartDocument = HydratedDocument<Cart>;

@Schema()
export class Cart {
  @Prop()
  productId: mongoose.Schema.Types.ObjectId;

  @Prop()
  customerId: mongoose.Schema.Types.ObjectId;

  @Prop()
  quantity: number;

  @Prop()
  total_money: number;

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

export const CartSchema = SchemaFactory.createForClass(Cart);