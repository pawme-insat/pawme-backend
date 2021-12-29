import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Pet } from '../../pet/entities/pet.entity';

@ObjectType()
@Entity({ name: 'like-pets' })
export class LikePet {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field((type) => Pet)
  @OneToOne(() => Pet)
  @JoinColumn()
  pet: Pet;

  @Field((type) => Pet)
  @OneToOne(() => Pet)
  @JoinColumn()
  likedPet: Pet;
}
