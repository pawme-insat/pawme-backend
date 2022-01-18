import { Field, Int, ObjectType } from '@nestjs/graphql';
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
import { TimeStampEntity } from '../../generics/db/timestamp.entity';

@ObjectType()
@Entity({ name: 'users' })
export class User extends TimeStampEntity {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  first_name: string;

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

  @Field()
  @Column()
  password: string;

  @Field((newType) => Date)
  @IsDate()
  @Column()
  birth_date: Date;

  @Field((type) => Address)
  @ManyToOne(() => Address, { cascade: true, eager: true })
  address: Address;

  @Field((type) => [Pet])
  @OneToMany(() => Pet, (Pet) => Pet.user, {
    cascade: true,
    eager: true,
    onDelete: 'CASCADE',
  })
  pets: Pet[];

  @Field()
  @Column()
  image: string;
}
