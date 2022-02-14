import { Field, InputType } from '@nestjs/graphql';
import { CreateLikePetInput } from '../../like-pet/dto/create-like-pet.input';

@InputType()
export class CreateMatchInput {
  @Field((type) => CreateLikePetInput)
  likePetRight: CreateLikePetInput;

  @Field((type) => CreateLikePetInput)
  likePetLeft: CreateLikePetInput;

  @Field((type) => Boolean)
  isSeenRight: boolean;

  @Field((type) => Boolean)
  isSeenLeft: boolean;
}
