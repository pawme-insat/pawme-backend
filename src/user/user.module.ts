import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { LocationModule } from '../location/location.module';
import { LocationService } from '../location/location.service';

@Module({
  providers: [UserResolver, UserService],
  imports: [LocationService],
})
export class UserModule {}
