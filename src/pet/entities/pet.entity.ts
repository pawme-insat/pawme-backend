import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { PetType } from '../../pet-type/entities/pet-type.entity';
import { User } from '../../user/entities/user.entity';

enum Sexe {
  'Masculin' = 'M',
  'Feminin' = 'F',
}
registerEnumType(Sexe, {
  name: 'Sexe',
});

@ObjectType()
@Entity()
export class Pet {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: number;

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
