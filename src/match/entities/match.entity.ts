import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TimeStampEntity } from '../../generics/db/timestamp.entity';

@ObjectType()
@Entity()
export class Match extends TimeStampEntity {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: number;
  //
  // @Field((type) => Like)
  // @OneToOne(() => Like)
  // @JoinColumn()
  // like1: Like;
  //
  // @Field((type) => Like)
  // @OneToOne(() => Like)
  // @JoinColumn()
  // like2: Like;
}
