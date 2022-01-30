import {
  BadRequestException,
  Body,
  Controller,
  ImATeapotException,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from '../../user/user.service';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path';
import { v4 as uuidv4 } from 'uuid';

import fs from 'fs';
import { PetGalleryService } from '../../pet-gallery/pet-gallery.service';
import { PetService } from '../../pet/pet.service';

@Controller('upload')
export class UploadController {
  constructor(
    private userService: UserService,
    private readonly petGalleryService: PetGalleryService,
    private petService: PetService,
  ) {}

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
  @Post('user')
  async uploadFile(@UploadedFile() file: Express.Multer.File, @Body() body) {
    console.log(body.id);
    const user = await this.userService.findOne(body.id);
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
      return await this.userService.update(body.id, user);
    }
  }

  @UseInterceptors(
    FilesInterceptor('images', 5, {
      storage: diskStorage({
        destination: './uploads/galleryimages',
        filename: (req, file, cd) => {
          const filename: string =
            uuidv4() +
            path.parse(file.originalname).name.replace(/\s/g, '') +
            path.parse(file.originalname).ext;
          cd(null, filename);
        },
      }),
    }),
  )
  @Post('pet')
  async uploadGallery(
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Body() body,
  ) {
    console.log(files);
    const pet = await this.petService.findOne(body.id);
    if (pet == null) {
      return ImATeapotException;
    }
    // check if the pet has a pdp to replace it
    if (pet.pdp != '') {
      const path = './uploads/galleryimages/' + pet.pdp;
      try {
        fs.unlinkSync(path);
      } catch (e) {
        console.log(e);
      }
    }
    // Add pdp to pet
    pet.pdp = files[0].filename;
    await this.petService.update(body.id, pet);
    console.log(pet);

    // Add gallery

  }
}
