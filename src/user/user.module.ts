import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { LocationModule } from '../location/location.module';

import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Location } from 'src/location/entities/location.entity';

@Module({
  providers: [UserResolver, UserService],
  imports: [LocationModule, TypeOrmModule.forFeature([User, Location])],
})
export class UserModule {}
