import { Module } from '@nestjs/common';
import { PetTypeService } from './pet-type.service';
import { PetTypeResolver } from './pet-type.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetType } from './entities/pet-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PetType])],
  providers: [PetTypeResolver, PetTypeService],
  exports: [PetTypeService, PetTypeResolver],
})
export class PetTypeModule {}
