import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Pet } from '../../pet/entities/pet.entity';
import { TimeStampEntity } from '../../generics/db/timestamp.entity';
import { Conversation } from '../../conversation/entities/conversation.entity';

@ObjectType()
export class Message extends TimeStampEntity {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: number;

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
