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
import { PetGalleryService } from '../../pet-gallery/pet-gallery.service';
import { PetService } from '../../pet/pet.service';
import { CreatePetGalleryDto } from '../../pet-gallery/dto/create-pet-gallery.dto';
import { deletefile } from './delete-file-from-server';

@Controller('upload')
export class UploadController {
  constructor(
    private userService: UserService,
    private readonly petGalleryService: PetGalleryService,
    private petService: PetService,
    private createPetGalleryDto: CreatePetGalleryDto,
  ) {}

  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: process.env.USER_PDP,
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
        deletefile(user.image, process.env.USER_PDP);
      }
      user.image = file.filename;
      console.log(file.path);
      return await this.userService.update(body.id, user);
    }
  }

  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: process.env.PET_GALLERY,
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
  @Post('pet/pdp')
  async uploadPetPDP(@UploadedFile() file: Express.Multer.File, @Body() body) {
    console.log(file);
    const pet = await this.petService.findOne(body.id);
    if (pet == null) {
      return ImATeapotException;
    }
    // check if the pet has a pdp to replace it
    if (pet.pdp != '') {
      deletefile(pet.pdp, process.env.PET_GALLERY);
    }
    // Add pdp to pet
    pet.pdp = file.filename;
    await this.petService.update(body.id, pet);
    console.log(pet);
    return pet;
  }

  @UseInterceptors(
    FilesInterceptor('images', 4, {
      storage: diskStorage({
        destination: process.env.PET_GALLERY,
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
  @Post('pet/gallery')
  async uploadGallery(
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Body() body,
  ) {
    console.log(files);
    const pet = await this.petService.findOne(body.id);
    if (pet == null) {
      return ImATeapotException;
    }
    // Add gallery
    for (let i = 1; i < files.length; i++) {
      this.createPetGalleryDto.filename = files[i].filename;
      this.createPetGalleryDto.pet = body.id;
      await this.petGalleryService.create(this.createPetGalleryDto);
    }

    return pet;
  }
}
