import { CreateLikePetInput } from './create-like-pet.input';
import { Field, InputType, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateLikePetInput extends PartialType(CreateLikePetInput) {
  @Field(() => Int)
  id: number;
}
