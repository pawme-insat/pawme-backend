import { Module } from '@nestjs/common';
import { BreedService } from './breed.service';
import { BreedResolver } from './breed.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Breed } from './entities/breed.entity';
import { CreateBreedInput } from './dto/create-breed.input';

@Module({
  imports: [TypeOrmModule.forFeature([Breed])],
  providers: [BreedResolver, BreedService, CreateBreedInput],
  exports: [BreedService, CreateBreedInput],
})
export class BreedModule {}
