import { Injectable } from '@nestjs/common';
import { GenericService } from '../generics/generic/generic.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService extends GenericService<User> {
  constructor(
    @InjectRepository(User)
    private readonly myRepository: Repository<User>,
  ) {
    super(myRepository);
  }

  async findOneByMail(email: string): Promise<User | undefined> {
    return this.myRepository.findOne(email);
  }
}
