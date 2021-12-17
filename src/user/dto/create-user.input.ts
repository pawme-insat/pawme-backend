import { Field, InputType, Int } from '@nestjs/graphql';
import { IsDate, IsEmail } from 'class-validator';
import { Address } from '../../address/entities/address.entity';
import { ManyToOne, OneToMany } from 'typeorm';
import { Pet } from '../../pet/entities/pet.entity';

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

  @Field((type) => Address)
  @ManyToOne(() => Address)
  address: Address;

  @Field((type) => [Pet])
  @OneToMany(() => Pet, (Pet) => Pet.user)
  pets: Pet[];
}
