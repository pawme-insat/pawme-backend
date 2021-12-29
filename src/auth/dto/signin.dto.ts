import { OmitType } from '@nestjs/mapped-types';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { RegisterDto } from './register.dto';
import {Field, InputType} from "@nestjs/graphql";

@InputType()
export class SignInDto extends OmitType(RegisterDto, [
  'first_name',
  'last_name',
  'phone',
  'address',
  'birth_date',
]) {
  @Field()
  email: string;
  @Field()
  password: string;
}
