import { Module } from '@nestjs/common';
import { PetGalleryService } from './pet-gallery.service';
import { PetGalleryController } from './pet-gallery.controller';
import { PetModule } from '../pet/pet.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetGallery } from './entities/pet-gallery.entity';

@Module({
  controllers: [PetGalleryController],
  providers: [PetGalleryService],
  imports: [PetModule, TypeOrmModule.forFeature([PetGallery])],
})
export class PetGalleryModule {}
