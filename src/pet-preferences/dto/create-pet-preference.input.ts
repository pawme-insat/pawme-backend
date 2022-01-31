import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePetPreferenceInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
