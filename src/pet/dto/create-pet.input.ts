import { InputType, Int, Field, registerEnumType } from '@nestjs/graphql';
import { Type } from '../../type/entities/type.entity';
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

  @Field((type) => Type)
  @ManyToOne(() => Type, (Type) => Type.pets)
  type: Type;

  @Field((type) => User)
  @ManyToOne(() => User, (User) => User.pets)
  user: User;
}
