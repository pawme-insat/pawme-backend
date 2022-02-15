import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Pet } from '../../pet/entities/pet.entity';
import { TimeStampEntity } from '../../generics/db/timestamp.entity';

@ObjectType()
@Entity({ name: 'like-pets' })
export class LikePet extends TimeStampEntity {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field((type) => Pet)
  @ManyToOne(() => Pet, { eager: true })
  @JoinColumn()
  pet: Pet;

  @Field((type) => Pet)
  @ManyToOne(() => Pet, { eager: true })
  @JoinColumn()
  likedPet: Pet;
}
