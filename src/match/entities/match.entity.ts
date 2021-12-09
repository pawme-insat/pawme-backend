import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PrimaryGeneratedColumn } from 'typeorm';
import { TimeStampEntity } from '../../generics/db/timestamp.entity';
import { Like } from '../../like/entities/like.entity';

@ObjectType()
export class Match extends TimeStampEntity {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field((type) => Like)
  like_1: Like;

  @Field((type) => Like)
  like_2: Like;
}
