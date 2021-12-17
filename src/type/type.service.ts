import { Injectable } from '@nestjs/common';
import { GenericService } from '../generics/generic/generic.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Type } from './entities/type.entity';

@Injectable()
export class TypeService extends GenericService<Type> {
  constructor(
    @InjectRepository(Type)
    private readonly myRepository: Repository<Type>,
  ) {
    super(myRepository);
  }
}
