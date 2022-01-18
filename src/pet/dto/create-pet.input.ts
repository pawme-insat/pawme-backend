import { Field, InputType, Int, registerEnumType } from '@nestjs/graphql';
import { CreatePetTypeInput } from '../../pet-type/dto/create-pet-type.input';
import { CreateUserInput } from '../../user/dto/create-user.input';

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

  @Field((type) => Int)
  age: number;

  @Field((type) => Sexe)
  sexe: Sexe;

  @Field()
  aboutMe: string;

  @Field((type) => CreatePetTypeInput)
  type: CreatePetTypeInput;

  @Field((type) => CreateUserInput)
  user: CreateUserInput;

  @Field()
  image1: string;

  @Field()
  image2: string;

  @Field()
  image3: string;

  @Field()
  image4: string;

  @Field()
  image5: string;
}
