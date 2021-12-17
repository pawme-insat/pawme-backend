import { InputType, Int, Field } from '@nestjs/graphql';
import { User } from '../../user/entities/user.entity';
import { ManyToOne } from 'typeorm';
import { Pet } from '../../pet/entities/pet.entity';

@InputType()
export class CreateReviewInput {
  @Field()
  description: string;

  @Field((type) => User)
  @ManyToOne(() => User)
  user: User;

  @Field((type) => Pet)
  @ManyToOne(() => Pet)
  pet: Pet;
}
