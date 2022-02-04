import { Injectable } from '@nestjs/common';
import { GenericService } from '../generics/generic/generic.service';
import { PetPreference } from './entities/pet-preference.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PetPreferencesService extends GenericService<PetPreference> {
  constructor(
    @InjectRepository(PetPreference)
    private readonly myRepository: Repository<PetPreference>,
  ) {
    super(myRepository, { useSoftDelete: true });
  }
}
