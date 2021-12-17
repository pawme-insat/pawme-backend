import { Injectable } from '@nestjs/common';
import { GenericService } from '../generics/generic/generic.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Like } from './entities/like.entity';

@Injectable()
export class LikeService extends GenericService<Like> {
  constructor(
    @InjectRepository(Like)
    private readonly myRepository: Repository<Like>,
  ) {
    super(myRepository);
  }
}
