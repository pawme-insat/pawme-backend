import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Pet } from '../../pet/entities/pet.entity';

@ObjectType()
@Entity({ name: 'reviews' })
export class Review {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  description: string;

  @Field((type) => User)
  @ManyToOne(() => User)
  user: User;

  @Field((type) => Pet)
  @ManyToOne(() => Pet)
  pet: Pet;
}
