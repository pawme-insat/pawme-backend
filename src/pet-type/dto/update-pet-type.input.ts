import { CreatePetTypeInput } from './create-pet-type.input';
import { Field, InputType, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePetTypeInput extends PartialType(CreatePetTypeInput) {
  @Field(() => Int)
  id: number;
}
