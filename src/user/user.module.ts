import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';

import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { AddressModule } from '../address/address.module';
import { Address } from '../address/entities/address.entity';

@Module({
  providers: [UserResolver, UserService],
  imports: [AddressModule, TypeOrmModule.forFeature([User, Address])],
  exports: [UserService],
})
export class UserModule {}
