import { Module } from '@nestjs/common';
import { BreedCharacteristicService } from './breed-characteristic.service';
import { BreedCharacteristicResolver } from './breed-characteristic.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BreedCharacteristic } from './entities/breed-characteristic.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BreedCharacteristic])],
  providers: [BreedCharacteristicResolver, BreedCharacteristicService],
})
export class BreedCharacteristicModule {}
