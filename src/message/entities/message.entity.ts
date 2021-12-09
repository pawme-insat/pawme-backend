import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PrimaryGeneratedColumn } from 'typeorm';
import { Pet } from '../../pet/entities/pet.entity';
import { TimeStampEntity } from '../../generics/db/timestamp.entity';

@ObjectType()
export class Message extends TimeStampEntity {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field((type) => Pet)
  receiver: Pet;

  @Field((type) => Pet)
  sender: Pet;

  @Field()
  content: string;
}
