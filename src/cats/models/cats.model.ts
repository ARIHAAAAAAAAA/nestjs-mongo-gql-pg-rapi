import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Types } from 'mongoose';

@ObjectType()
export class CatType {
  @Field(() => ID)
  _id?: Types.ObjectId;

  @Field()
  name: string;

  @Field()
  color: string;

  @Field()
  breed: string;
}
