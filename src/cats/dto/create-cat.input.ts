import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCatInput {
  @Field(() => Int, { description: 'ID of the cat' })
  id: number;

  @Field({ description: 'Name of the cat' })
  name: string;

  @Field({ description: 'Breed of the cat' })
  breed: string;

  @Field({ description: 'Color of the cat' })
  color: string;
}
