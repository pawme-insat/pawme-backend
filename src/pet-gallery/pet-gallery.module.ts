import { Module } from '@nestjs/common';
import { PetGalleryService } from './pet-gallery.service';
import { PetGalleryController } from './pet-gallery.controller';
import { PetModule } from '../pet/pet.module';
import {GenericService} from "../generics/generic/generic.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {PetType} from "../pet-type/entities/pet-type.entity";
import {PetGallery} from "./entities/pet-gallery.entity";

@Module({
  controllers: [PetGalleryController],
  providers: [PetGalleryService],
  imports: [PetModule, TypeOrmModule.forFeature([PetGallery])],
})
export class PetGalleryModule {}
