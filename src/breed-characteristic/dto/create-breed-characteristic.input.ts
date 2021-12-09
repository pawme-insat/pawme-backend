import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateBreedCharacteristicInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
