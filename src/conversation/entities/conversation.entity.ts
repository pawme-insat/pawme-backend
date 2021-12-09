import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PrimaryGeneratedColumn } from 'typeorm';
import { Match } from '../../match/entities/match.entity';
import { Message } from '../../message/entities/message.entity';

@ObjectType()
export class Conversation {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field((type) => Match)
  match: Match;

  @Field((type) => [Message])
  messages: Message[];
}
