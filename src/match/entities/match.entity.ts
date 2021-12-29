import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TimeStampEntity } from '../../generics/db/timestamp.entity';
import { LikePet } from '../../like-pet/entities/like-pet.entity';

@ObjectType()
@Entity()
export class Match extends TimeStampEntity {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field((type) => LikePet)
  @OneToOne(() => LikePet)
  @JoinColumn()
  likePetRight: LikePet;

  @Field((type) => LikePet)
  @OneToOne(() => LikePet)
  @JoinColumn()
  likePetLeft: LikePet;
}
