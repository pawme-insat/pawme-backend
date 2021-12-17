import { InputType, Int, Field } from '@nestjs/graphql';
import { Like } from '../../like/entities/like.entity';
import { JoinColumn, OneToOne } from 'typeorm';

@InputType()
export class CreateMatchInput {
  @Field((type) => Like)
  @OneToOne(() => Like)
  @JoinColumn()
  like1: Like;

  @Field((type) => Like)
  @OneToOne(() => Like)
  @JoinColumn()
  like2: Like;
}
