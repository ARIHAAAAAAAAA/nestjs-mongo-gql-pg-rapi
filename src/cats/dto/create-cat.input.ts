import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CatInput {
  @Field({ description: 'Name of the cat' })
  name: string;

  @Field({ description: 'Breed of the cat' })
  breed: string;

  @Field({ description: 'Color of the cat' })
  color: string;
}
// @Field( { description: 'ID of the cat' })
// id:string
