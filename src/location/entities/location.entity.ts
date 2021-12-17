import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@InputType()
@Entity()
export class Location {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field((type) => Int)
  zip_code: number;

  @Field()
  street: string;

  @Field()
  region: string;

  @Field()
  country: string;
}
