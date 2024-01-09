import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateCatInput {
  @Field({ description: 'ID of the cat' })
  _id: string;

  @Field({ description: 'Name of the cat' })
  name: string;

  @Field({ description: 'Breed of the cat' })
  breed: string;

  @Field({ description: 'Color of the cat' })
  color: string;
}
