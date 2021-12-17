import { InputType, Int, Field } from '@nestjs/graphql';
import { IsDate, IsEmail } from 'class-validator';
import { Location } from '../../location/entities/location.entity';
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

  @Field((type) => Location)
  @ManyToOne(() => Location)
  location: Location;

  @Field((type) => [Pet])
  @OneToMany(() => Pet, (Pet) => Pet.user)
  pets: Pet[];
}
