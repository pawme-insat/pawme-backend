import { Module } from '@nestjs/common';
import { UploadController } from './upload.controller';
import { UserModule } from '../../user/user.module';
import { PetGalleryModule } from '../../pet-gallery/pet-gallery.module';
import { PetModule } from '../../pet/pet.module';

@Module({
  controllers: [UploadController],
  imports: [UserModule, PetGalleryModule, PetModule],
})
export class UploadModule {}
