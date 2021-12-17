import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { LocationModule } from '../location/location.module';
import { LocationService } from '../location/location.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  providers: [UserResolver, UserService],
  imports: [LocationService, TypeOrmModule.forFeature([User])],
})
export class UserModule {}
