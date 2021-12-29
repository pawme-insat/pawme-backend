import { IsDate, IsEmail, IsNotEmpty } from 'class-validator';
import { Field, InputType, Int } from '@nestjs/graphql';
import { CreateAddressInput } from '../../address/dto/create-address.input';

@InputType()
export class RegisterDto {
  @Field()
  @IsNotEmpty()
  first_name: string;

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

  @Field()
  @IsNotEmpty()
  password: string;
}
