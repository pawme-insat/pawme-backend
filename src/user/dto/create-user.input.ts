import { Field, InputType, Int } from '@nestjs/graphql';
import { IsDate, IsEmail } from 'class-validator';
import { CreateAddressInput } from '../../address/dto/create-address.input';
import { CreatePetInput } from '../../pet/dto/create-pet.input';

@InputType()
export class CreateUserInput {
  @Field()
  first_name: number;

  @Field()
  last_name: string;

  @Field((type) => Int)
  phone: number;

  @Field()
  @IsEmail()
  email: string;

  @Field((newType) => Date)
  @IsDate()
  birth_date: Date;

  @Field((type) => CreateAddressInput)
  address: CreateAddressInput;

  @Field((type) => [CreatePetInput])
  pets: CreatePetInput[];
}
