import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TimeStampEntity } from '../../generics/db/timestamp.entity';
import { LikePet } from '../../like-pet/entities/like-pet.entity';

@ObjectType()
@Entity({ name: 'matches' })
export class Match extends TimeStampEntity {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field((type) => LikePet)
  @ManyToOne(() => LikePet)
  @JoinColumn()
  likePetRight: LikePet;

  @Field((type) => LikePet)
  @ManyToOne(() => LikePet)
  @JoinColumn()
  likePetLeft: LikePet;

  @Field((type) => Boolean)
  @Column()
  isSeenRight: boolean;

  @Field((type) => Boolean)
  @Column()
  isSeenLeft: boolean;
}
