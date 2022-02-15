import { Module } from '@nestjs/common';
import { PetPreferencesService } from './pet-preferences.service';
import { PetPreferencesResolver } from './pet-preferences.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetPreference } from './entities/pet-preference.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PetPreference])],
  providers: [PetPreferencesResolver, PetPreferencesService],
  exports: [PetPreferencesModule],
})
export class PetPreferencesModule {}
