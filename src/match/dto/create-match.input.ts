import { Field, InputType } from '@nestjs/graphql';
import { LikePet } from '../../like-pet/entities/like-pet.entity';
import { JoinColumn, OneToOne } from 'typeorm';

@InputType()
export class CreateMatchInput {
  @Field((type) => LikePet)
  @OneToOne(() => LikePet)
  @JoinColumn()
  like1: LikePet;

  @Field((type) => LikePet)
  @OneToOne(() => LikePet)
  @JoinColumn()
  like2: LikePet;
}
