import { Field, InputType } from '@nestjs/graphql';
import { CreatePetInput } from '../../pet/dto/create-pet.input';
import { CreateConversationInput } from '../../conversation/dto/create-conversation.input';

@InputType()
export class CreateMessageInput {
  @Field((type) => CreatePetInput)
  receiver: CreatePetInput;

  @Field((type) => CreatePetInput)
  sender: CreatePetInput;

  @Field()
  content: string;

  @Field((type) => CreateConversationInput)
  conversation: CreateConversationInput;
}
