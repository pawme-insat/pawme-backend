import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Pet } from '../../pet/entities/pet.entity';

@ObjectType()
@Entity()
export class Review {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  description: string;

  @Field((type) => User)
  @ManyToOne(() => User)
  user: User;

  @Field((type) => Pet)
  @ManyToOne(() => Pet)
  pet: Pet;
}
