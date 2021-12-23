import { Field, HideField, InputType, Int } from '@nestjs/graphql';
import { IsDate, IsEmail, IsNotEmpty } from 'class-validator';
import { CreateAddressInput } from '../../address/dto/create-address.input';
import { CreatePetInput } from '../../pet/dto/create-pet.input';
import { Column } from 'typeorm';

@InputType()
export class CreateUserInput {
  @Field()
  @IsNotEmpty()
  first_name: number;

  @Field()
  @IsNotEmpty()
  last_name: string;

  @Field((type) => Int)
  @IsNotEmpty()
  phone: number;

  @Field()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Field((newType) => Date)
  @IsNotEmpty()
  @IsDate()
  birth_date: Date;

  @Field((type) => CreateAddressInput)
  @IsNotEmpty()
  address: CreateAddressInput;

  @HideField()
  @IsNotEmpty()
  password: string;
}
