import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AdminDocument = HydratedDocument<Admin>;

@Schema()
export class Admin {
  @Prop()
  name: string;

  @Prop()
  avatar_path: string;

  @Prop()
  password: string;

  @Prop()
  email: string

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

export const AdminSchema = SchemaFactory.createForClass(Admin);