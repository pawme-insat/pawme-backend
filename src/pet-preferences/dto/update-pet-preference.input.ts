import { CreatePetPreferenceInput } from './create-pet-preference.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePetPreferenceInput extends PartialType(CreatePetPreferenceInput) {
  @Field(() => Int)
  id: number;
}
