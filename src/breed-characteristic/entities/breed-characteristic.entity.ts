import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class BreedCharacteristic {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  label: string;

  @Field({ nullable: true })
  description: string;
}
