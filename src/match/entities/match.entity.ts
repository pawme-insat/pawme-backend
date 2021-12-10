import { Field, Int, ObjectType } from '@nestjs/graphql';
import { JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TimeStampEntity } from '../../generics/db/timestamp.entity';
import { Like } from '../../like/entities/like.entity';

@ObjectType()
export class Match extends TimeStampEntity {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field((type) => Like)
  @OneToOne(() => Like)
  @JoinColumn()
  like1: Like;

  @Field((type) => Like)
  @OneToOne(() => Like)
  @JoinColumn()
  like2: Like;
}
