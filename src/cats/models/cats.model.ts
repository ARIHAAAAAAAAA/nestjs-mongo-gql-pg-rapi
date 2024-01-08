import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Schema, SchemaFactory } from '@nestjs/mongoose';

export type CatDocument = Cat & Document;
@ObjectType()
@Schema()
export class Cat {
  @Field(type => Int)
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  color?: string;

  @Field({ nullable: true })
  breed?: string;
}
export const CatSchema = SchemaFactory.createForClass(Cat)