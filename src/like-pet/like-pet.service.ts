import { Injectable } from '@nestjs/common';
import { GenericService } from '../generics/generic/generic.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LikePet } from './entities/like-pet.entity';

@Injectable()
export class LikePetService extends GenericService<LikePet> {
  constructor(
    @InjectRepository(LikePet)
    private readonly myRepository: Repository<LikePet>,
  ) {
    super(myRepository, { useSoftDelete: true });
  }
}
