import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressResolver } from './address.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  exports: [AddressService],
  imports: [TypeOrmModule.forFeature([Location])],
  providers: [AddressResolver, AddressService],
})
export class AddressModule {}
