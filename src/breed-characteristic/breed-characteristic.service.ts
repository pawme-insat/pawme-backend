import { Injectable } from '@nestjs/common';
import { GenericService } from '../generics/generic/generic.service';
import { BreedCharacteristic } from './entities/breed-characteristic.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BreedCharacteristicService extends GenericService<BreedCharacteristic> {
  constructor(
    @InjectRepository(BreedCharacteristic)
    private readonly myRepository: Repository<BreedCharacteristic>,
  ) {
    super(myRepository, { useSoftDelete: true });
  }
}
