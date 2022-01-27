import { Field, InputType, Int, registerEnumType } from '@nestjs/graphql';
import { CreatePetTypeInput } from '../../pet-type/dto/create-pet-type.input';
import { CreateUserInput } from '../../user/dto/create-user.input';
import {IsDate, IsNotEmpty} from "class-validator";

enum Sexe {
  'Masculin' = 'M',
  'Feminin' = 'F',
}
registerEnumType(Sexe, {
  name: 'SexeEnum',
});

@InputType()
export class CreatePetInput {
  @Field()
  name: string;

  @Field((newType) => Date)
  @IsNotEmpty()
  @IsDate()
  birth_date: Date;

  @Field((type) => Sexe)
  sexe: Sexe;

  @Field()
  aboutMe: string;

  @Field()
  user: number;

  @Field()
  type: number;
}
