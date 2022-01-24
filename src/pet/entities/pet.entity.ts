import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';

import { PetType } from '../../pet-type/entities/pet-type.entity';
import { User } from '../../user/entities/user.entity';
import {Breed} from "../../breed/entities/breed.entity";

enum Sexe {
  'Masculin' = 'M',
  'Feminin' = 'F',
}
registerEnumType(Sexe, {
  name: 'Sexe',
});

@ObjectType()
@Entity({ name: 'pets' })
export class Pet {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field((type) => Int)
  @Column()
  age: number;

  @Field((type) => Sexe)
  @Column()
  sexe: Sexe;

  @Field()
  @Column()
  aboutMe: string;

  @Field((type) => Breed)
  @ManyToOne(() => Breed, { eager: true, cascade: true })
  type: Breed;

  @Field((type) => User)
  @ManyToOne(() => User, (User) => User.pets, { })
  user: User;
}
