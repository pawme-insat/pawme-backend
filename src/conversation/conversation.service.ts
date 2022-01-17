import { Injectable } from '@nestjs/common';
import { GenericService } from '../generics/generic/generic.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Conversation } from './entities/conversation.entity';

@Injectable()
export class ConversationService extends GenericService<Conversation> {
  constructor(
    @InjectRepository(Conversation)
    private readonly myRepository: Repository<Conversation>,
  ) {
    super(myRepository, { useSoftDelete: true });
  }
}
