import { InputType, Int, Field } from '@nestjs/graphql';
import { Match } from '../../match/entities/match.entity';
import { JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { Message } from '../../message/entities/message.entity';

@InputType()
export class CreateConversationInput {
  @Field((type) => Match)
  @OneToOne(() => Match)
  @JoinColumn()
  match: Match;

  @Field((type) => [Message])
  @OneToMany(() => Message, (Message) => Message.conversation)
  @JoinColumn()
  messages: Message[];
}
