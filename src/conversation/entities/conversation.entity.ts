import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Match } from '../../match/entities/match.entity';
import { Message } from '../../message/entities/message.entity';
import { TimeStampEntity } from '../../generics/db/timestamp.entity';

@ObjectType()
@Entity({ name: 'conversations' })
export class Conversation extends TimeStampEntity {
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
