import {
  BadRequestException,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from '../../user/user.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path';
import { v4 as uuidv4 } from 'uuid';

import fs from 'fs';

@Controller('upload')
export class UploadController {
  constructor(private userService: UserService) {}

  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads/profileimages',
        filename: (req, file, cd) => {
          const filename: string =
            uuidv4() +
            path.parse(file.originalname).name.replace(/\s/g, '') +
            path.parse(file.originalname).ext;
          console.log('I am here');
          cd(null, filename);
        },
      }),
    }),
  )
  @Post()
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    const user = await this.userService.findOne(1);
    if (user == null) {
      return BadRequestException;
    } else {
      if (user.image != '') {
        const path = './uploads/profileimages/' + user.image;
        try {
          fs.unlinkSync(path);
        } catch (e) {
          console.log(e);
        }
      }
      user.image = file.filename;
      console.log(file.path);
      return await this.userService.update(1, user);
    }
  }
}
