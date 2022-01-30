import { Module } from '@nestjs/common';
import { PetGalleryService } from './pet-gallery.service';
import { PetGalleryController } from './pet-gallery.controller';
import { PetModule } from '../pet/pet.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetGallery } from './entities/pet-gallery.entity';
import { CreatePetGalleryDto } from './dto/create-pet-gallery.dto';

@Module({
  controllers: [PetGalleryController],
  providers: [PetGalleryService, CreatePetGalleryDto],
  imports: [PetModule, TypeOrmModule.forFeature([PetGallery])],
  exports: [PetGalleryService, CreatePetGalleryDto],
})
export class PetGalleryModule {}
