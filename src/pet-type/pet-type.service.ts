import { Injectable } from '@nestjs/common';
import { GenericService } from '../generics/generic/generic.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PetType } from './entities/pet-type.entity';

@Injectable()
export class PetTypeService extends GenericService<PetType> {
  constructor(
    @InjectRepository(PetType)
    private readonly myRepository: Repository<PetType>,
  ) {
    super(myRepository);
  }
}
