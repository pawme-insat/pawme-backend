import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateLikePetInput {
  @Field((type) => Int)
  pet: number;

  @Field((type) => Int)
  likedPet: number;
}
