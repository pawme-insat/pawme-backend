import { InputType, Int, Field } from '@nestjs/graphql';
import { IsDate, IsEmail } from 'class-validator';
import { Location } from '../../location/entities/location.entity';
import { ManyToOne, OneToMany } from 'typeorm';
import { Pet } from '../../pet/entities/pet.entity';
import { CreatePetInput } from 'src/pet/dto/create-pet.input';
import { CreateLocationInput } from 'src/location/dto/create-location.input';

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

  @Field((type) => CreateLocationInput)
  location: CreateLocationInput;

  @Field((type) => [CreatePetInput])
  pets: Pet[];
}
