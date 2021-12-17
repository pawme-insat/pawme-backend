import {
  Field,
  InputType,
  Int,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Type } from '../../type/entities/type.entity';
import { User } from '../../user/entities/user.entity';

enum Sexe {
  'Masculin' = 'M',
  'Feminin' = 'F',
}
registerEnumType(Sexe, {
  name: 'Sexe',
});

@ObjectType()
@InputType()
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

  @Field((type) => Type)
  @ManyToOne(() => Type, (Type) => Type.pets)
  type: Type;

  @Field((type) => User)
  @ManyToOne(() => User, (User) => User.pets)
  user: User;
}
