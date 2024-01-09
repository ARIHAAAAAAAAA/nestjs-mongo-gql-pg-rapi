import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class CatSchema {
  // @Prop({ type: Types.ObjectId, auto: true })
  // _id: Types.ObjectId;

  @Prop()
  name: string;

  @Prop()
  color: string;

  @Prop()
  breed: string;
}

export const CatMongo = SchemaFactory.createForClass(CatSchema);
