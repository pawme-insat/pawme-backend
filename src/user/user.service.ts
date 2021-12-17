import { Injectable } from '@nestjs/common';
import { GenericService } from '../generics/generic/generic.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { LocationService } from '../location/location.service';

@Injectable()
export class UserService extends GenericService<User> {
  constructor(
    @InjectRepository(User)
    private readonly myRepository: Repository<User>,
  ) {
    super(myRepository);
  }
}
