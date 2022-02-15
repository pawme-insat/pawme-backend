import { Field, InputType, registerEnumType } from '@nestjs/graphql';
import { IsDate, IsNotEmpty } from 'class-validator';

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
  breedType: number;

  @Field()
  petPreference: number;
}
