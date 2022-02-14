import { Injectable } from '@nestjs/common';
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
    super(myRepository, { useSoftDelete: true });
  }
  public async findOneByName(name: string): Promise<Breed> {
    const a = await this.myRepository.findOne(name);
    console.log(a);
    return a;
  }
}
