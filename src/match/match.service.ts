import { Injectable } from '@nestjs/common';
import { GenericService } from '../generics/generic/generic.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Match } from './entities/match.entity';

@Injectable()
export class MatchService extends GenericService<Match> {
  constructor(
    @InjectRepository(Match)
    private readonly myRepository: Repository<Match>,
  ) {
    super(myRepository);
  }
}
