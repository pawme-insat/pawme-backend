import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateBreedCharacteristicInput {
  @Field()
  label: string;

  @Field({ nullable: true })
  description: string;
}
