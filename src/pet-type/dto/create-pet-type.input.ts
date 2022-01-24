import { Field, InputType } from '@nestjs/graphql';
import { CreateBreedInput } from '../../breed/dto/create-breed.input';
import { CreatePetInput } from '../../pet/dto/create-pet.input';

@InputType()
export class CreatePetTypeInput {
  @Field()
  name: string;
}
