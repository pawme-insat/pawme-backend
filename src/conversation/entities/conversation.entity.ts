import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Match } from '../../match/entities/match.entity';
import { Message } from '../../message/entities/message.entity';

@ObjectType()
// @Entity()
export class Conversation {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field((type) => Match)
  @OneToOne(() => Match)
  @JoinColumn()
  match: Match;

  @Field((type) => [Message])
  @OneToMany(() => Message, (Message) => Message.conversation)
  @JoinColumn()
  messages: Message[];
}
