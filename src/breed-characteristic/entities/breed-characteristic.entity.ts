import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
export class BreedCharacteristic {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  label: string;

  @Field({ nullable: true })
  description: string;
}
