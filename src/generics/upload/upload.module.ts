import { Module } from '@nestjs/common';
import { UploadController } from './upload.controller';
import { UserModule } from '../../user/user.module';
import { PetGalleryModule } from '../../pet-gallery/pet-gallery.module';
import { PetModule } from '../../pet/pet.module';
import {CreatePetGalleryDto} from "../../pet-gallery/dto/create-pet-gallery.dto";

@Module({
  controllers: [UploadController],
  imports: [UserModule, PetGalleryModule, PetModule, CreatePetGalleryDto],
})
export class UploadModule {}
