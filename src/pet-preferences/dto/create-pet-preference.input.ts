import { Field, InputType, Int } from '@nestjs/graphql';
import { Sexe } from '../../pet/entities/pet.entity';
import { Breed } from '../../breed/entities/breed.entity';

@InputType()
export class CreatePetPreferenceInput {
  @Field((type) => Int)
  age: number;

  @Field((type) => Sexe)
  sexe: Sexe;

  @Field((type) => Breed)
  breed: Breed;
}
