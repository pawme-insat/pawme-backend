import { Field, InputType } from '@nestjs/graphql';
import { CreatePetInput } from '../../pet/dto/create-pet.input';

@InputType()
export class CreateLikePetInput {
  @Field((type) => CreatePetInput)
  pet: CreatePetInput;

  @Field((type) => CreatePetInput)
  likedPet: CreatePetInput;
}
