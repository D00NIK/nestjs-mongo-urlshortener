import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type LinkDocument = mongoose.HydratedDocument<Link>;

@Schema({ timestamps: true })
export class Link {
  _id: mongoose.Types.ObjectId;
  __v: number;
  createdAt: Date;
  updatedAt: Date;

  @Prop({ required: true, unique: true })
  urlName: string;

  @Prop({ required: true })
  urlTarget: string;
}

export const LinkSchema = SchemaFactory.createForClass(Link);
