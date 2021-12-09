import { Module } from '@nestjs/common';
import { BreedCharacteristicService } from './breed-characteristic.service';
import { BreedCharacteristicResolver } from './breed-characteristic.resolver';

@Module({
  providers: [BreedCharacteristicResolver, BreedCharacteristicService]
})
export class BreedCharacteristicModule {}
