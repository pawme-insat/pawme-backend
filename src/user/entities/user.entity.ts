import { Field, HideField, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IsDate, IsEmail } from 'class-validator';
import { Address } from '../../address/entities/address.entity';
import { Pet } from '../../pet/entities/pet.entity';

@ObjectType()
@Entity()
export class User {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  first_name: number;

  @Field()
  @Column()
  last_name: string;

  @Field((type) => Int)
  @Column()
  phone: number;

  @Field()
  @IsEmail()
  @Column()
  email: string;

  @HideField()
  @Column()
  password: string;

  @Field((newType) => Date)
  @IsDate()
  @Column()
  birth_date: Date;

  @Field((type) => Address)
  @ManyToOne(() => Address)
  address: Address;

  @Field((type) => [Pet])
  @OneToMany(() => Pet, (Pet) => Pet.user)
  pets: Pet[];
}
