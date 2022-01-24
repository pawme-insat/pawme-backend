import { Injectable } from '@nestjs/common';
import { Message } from './entities/message.entity';
import { GenericService } from '../generics/generic/generic.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MessageService extends GenericService<Message> {
  constructor(
    @InjectRepository(Message)
    private readonly myRepository: Repository<Message>,
  ) {
    super(myRepository, { useSoftDelete: true });
  }
}
