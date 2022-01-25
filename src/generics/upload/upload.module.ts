import { Module } from '@nestjs/common';
import { UploadController } from './upload.controller';
import { UserModule } from '../../user/user.module';

@Module({
  controllers: [UploadController],
  imports: [UserModule],
})
export class UploadModule {}
