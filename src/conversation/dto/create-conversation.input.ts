import { Field, InputType } from '@nestjs/graphql';
import { CreateMatchInput } from '../../match/dto/create-match.input';
import { CreateMessageInput } from '../../message/dto/create-message.input';

@InputType()
export class CreateConversationInput {
  @Field((type) => CreateMatchInput)
  match: CreateMatchInput;

  @Field((type) => [CreateMessageInput])
  messages: CreateMessageInput[];
}
