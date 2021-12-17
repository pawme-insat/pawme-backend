import { InputType, Int, Field } from '@nestjs/graphql';
import { Pet } from '../../pet/entities/pet.entity';
import { JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { Conversation } from '../../conversation/entities/conversation.entity';

@InputType()
export class CreateMessageInput {
  @Field((type) => Pet)
  @OneToOne((type) => Pet)
  @JoinColumn()
  receiver: Pet;

  @Field((type) => Pet)
  @OneToOne((type) => Pet)
  @JoinColumn()
  sender: Pet;

  @Field()
  content: string;

  @Field((type) => Conversation)
  @ManyToOne(() => Conversation, (Conversation) => Conversation.messages)
  conversation: Conversation;
}
