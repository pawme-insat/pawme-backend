import { Module } from '@nestjs/common';
import { PetService } from './pet.service';
import { PetResolver } from './pet.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pet } from './entities/pet.entity';
import { PetTypeModule } from '../pet-type/pet-type.module';
import { BreedModule } from '../breed/breed.module';

@Module({
  imports: [TypeOrmModule.forFeature([Pet]), PetTypeModule, BreedModule],
  providers: [PetResolver, PetService],
  exports: [PetModule, PetService],
})
export class PetModule {}
