import { Injectable } from '@nestjs/common';
import { GenericService } from '../generics/generic/generic.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ConversationService extends GenericService<ConversationService> {
  constructor(
    @InjectRepository(ConversationService)
    private readonly myRepository: Repository<ConversationService>,
  ) {
    super(myRepository);
  }
}
