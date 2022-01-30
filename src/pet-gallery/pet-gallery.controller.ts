import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFiles,
  Injectable,
  ImATeapotException,
} from '@nestjs/common';
import { PetGalleryService } from './pet-gallery.service';
import { UpdatePetGalleryDto } from './dto/update-pet-gallery.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import { PetService } from '../pet/pet.service';
import fs from "fs";

@Injectable()
@Controller('pet-gallery')
export class PetGalleryController {
  constructor(
    private readonly petGalleryService: PetGalleryService,
    private petService: PetService,
  ) {}

  @UseInterceptors(
    FilesInterceptor('images', 5, {
      storage: diskStorage({
        destination: './uploads/galleryimages',
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
  async create(
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
    /*for (let i = 0; i < files.length; i++) {
      createPetGalleryDTO.filename = files[i].filename;
      createPetGalleryDTO.pet = body.id;
      await this.petGalleryService.create(createPetGalleryDTO);
    }
    pet.pdp = files[0].filename;
    await this.petService.update(body.id, pet);*/
    return files;
  }

  @Get()
  findAll() {
    return this.petGalleryService.findAll({});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.petGalleryService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePetGalleryDto: UpdatePetGalleryDto,
  ) {
    return this.petGalleryService.update(+id, updatePetGalleryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.petGalleryService.remove(+id);
  }
}
