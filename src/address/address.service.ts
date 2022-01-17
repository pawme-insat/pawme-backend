import { Injectable } from '@nestjs/common';
import { GenericService } from '../generics/generic/generic.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Address } from './entities/address.entity';

@Injectable()
export class AddressService extends GenericService<Address> {
  constructor(
    @InjectRepository(Address)
    private readonly myRepository: Repository<Address>,
  ) {
    super(myRepository, { useSoftDelete: true });
  }
}
