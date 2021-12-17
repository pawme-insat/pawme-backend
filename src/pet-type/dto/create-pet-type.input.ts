import { Field, InputType } from '@nestjs/graphql';
import { Breed } from '../../breed/entities/breed.entity';
import { OneToMany } from 'typeorm';
import { Pet } from '../../pet/entities/pet.entity';

@InputType()
export class CreatePetTypeInput {
  @Field()
  name: string;

  @Field((type) => [Breed])
  @OneToMany(() => Breed, (Breed) => Breed.type)
  breeds: Breed[];

  @Field((type) => [Pet])
  @OneToMany(() => Pet, (Pet) => Pet.type)
  pets: Pet[];
}
