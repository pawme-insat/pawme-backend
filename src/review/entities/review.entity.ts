import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Pet } from '../../pet/entities/pet.entity';

@ObjectType()
export class Review {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  description: string;

  @Field((type) => User)
  user: User;

  @Field((type) => Pet)
  pet: Pet;
}
