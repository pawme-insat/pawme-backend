import { Field, InputType, Int, registerEnumType } from '@nestjs/graphql';
import { PetType } from '../../pet-type/entities/pet-type.entity';
import { ManyToOne } from 'typeorm';
import { User } from '../../user/entities/user.entity';

enum Sexe {
  'Masculin' = 'M',
  'Feminin' = 'F',
}
registerEnumType(Sexe, {
  name: 'Sexe',
});

@InputType()
export class CreatePetInput {
  @Field()
  name: string;

  @Field((type) => Int)
  age: number;

  @Field((type) => Sexe)
  sexe: Sexe;

  @Field()
  aboutMe: string;

  @Field((type) => PetType)
  @ManyToOne(() => PetType, (PetType) => PetType.pets)
  type: PetType;

  @Field((type) => User)
  @ManyToOne(() => User, (User) => User.pets)
  user: User;
}
