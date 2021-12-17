import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';

import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { AddressModule } from '../address/address.module';

@Module({
  providers: [UserResolver, UserService],
  imports: [AddressModule, TypeOrmModule.forFeature([User, Location])],
})
export class UserModule {}
