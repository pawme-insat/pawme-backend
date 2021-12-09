import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PrimaryGeneratedColumn } from 'typeorm';

import { Type } from '../../type/entities/type.entity';

enum Sexe {
  'Masculin' = 'M',
  'Feminin' = 'F',
}

@ObjectType()
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
  type: Type;
}
