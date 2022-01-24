import { Injectable } from '@nestjs/common';
import { GenericService } from '../generics/generic/generic.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pet } from './entities/pet.entity';

@Injectable()
export class PetService extends GenericService<Pet> {
  constructor(
    @InjectRepository(Pet)
    private readonly myRepository: Repository<Pet>,
  ) {
    super(myRepository, { useSoftDelete: true });
  }
}
