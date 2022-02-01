import { Field, InputType, Int } from '@nestjs/graphql';
import { Sexe } from '../../pet/entities/pet.entity';

@InputType()
export class CreatePetPreferenceInput {
  @Field((type) => Int, { nullable: true })
  age: number;

  @Field((type) => Sexe, { nullable: true })
  sexe: Sexe;

  @Field({ nullable: true })
  breedType: number;

  @Field()
  pet: number;
}
