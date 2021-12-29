import { Field, InputType } from '@nestjs/graphql';
import { ManyToOne } from 'typeorm';
import { CreateUserInput } from '../../user/dto/create-user.input';
import { CreatePetInput } from '../../pet/dto/create-pet.input';

@InputType()
export class CreateReviewInput {
  @Field()
  description: string;

  @Field((type) => CreateUserInput)
  @ManyToOne(() => CreateUserInput)
  @Field((type) => CreatePetInput)
  pet: CreatePetInput;
}
