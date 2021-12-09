import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PrimaryGeneratedColumn } from 'typeorm';
import { IsDate, IsEmail } from 'class-validator';
import { Location } from '../../location/entities/location.entity';
import { Pet } from '../../pet/entities/pet.entity';

@ObjectType()
export class User {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: number;

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

  @Field((type) => Location)
  location: Location;

  @Field((type) => [Pet])
  pets: Pet[];
}
