import {
  BadRequestException,
  Body,
  Controller,
  Injectable,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor, MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { editFileName } from './edit-file-name';
import { UserService } from '../../user/user.service';
import { v4 as uuidv4 } from 'uuid';
import * as path from 'path';

@Injectable()
@Controller('uploads')
export class UploadsController {
  constructor(private userService: UserService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads/profileimages',
        filename: (req, file, cd) => {
          const filename: string =
            uuidv4() + path.parse(file.originalname).name.replace(/\s/g, '');
          cd(null, filename);
        },
      }),
    }),
  )
  addProfilePicture(@UploadedFile() file: Express.Multer.File) {
    /*const user = await this.userService.findOne(1);
    if (user == null) {
      return BadRequestException;
    } else {
      console.log(gallery);
      //user.image = gallery.filename;
      //return await this.userService.update(1, user);
    }*/
    console.log(file.path);
  }
}
