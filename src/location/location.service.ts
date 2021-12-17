import { Injectable } from '@nestjs/common';
import { GenericService } from '../generics/generic/generic.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Location } from './entities/location.entity';

@Injectable()
export class LocationService extends GenericService<Location> {
  constructor(
    @InjectRepository(Location)
    private readonly myRepository: Repository<Location>,
  ) {
    super(myRepository);
  }
}
