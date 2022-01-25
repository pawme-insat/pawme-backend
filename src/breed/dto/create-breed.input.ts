import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateBreedInput {
  @Field()
  name: string;

  @Field()
  type: number;
}
