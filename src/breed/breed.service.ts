import { Injectable } from '@nestjs/common';
import { CreateBreedInput } from './dto/create-breed.input';
import { UpdateBreedInput } from './dto/update-breed.input';
import { GenericService } from '../generics/generic/generic.service';
import { Breed } from './entities/breed.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BreedService extends GenericService<Breed> {
  constructor(
    @InjectRepository(Breed)
    private readonly myRepository: Repository<Breed>,
  ) {
    super(myRepository);
  }
}
