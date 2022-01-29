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
  ImATeapotException,
  Injectable,
} from '@nestjs/common';
import { PetGalleryService } from './pet-gallery.service';
import { CreatePetGalleryDto } from './dto/create-pet-gallery.dto';
import { UpdatePetGalleryDto } from './dto/update-pet-gallery.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import { PetService } from '../pet/pet.service';

@Injectable()
@Controller('pet-gallery')
export class PetGalleryController {
  constructor(
    private readonly petGalleryService: PetGalleryService, //private createPetGalleryDTO: CreatePetGalleryDto,
  ) {}

  @UseInterceptors(
    FilesInterceptor('images', 5, {
      storage: diskStorage({
        destination: './uploads/galleryimages',
        filename: (req, file, cd) => {
          const filename: string =
            uuidv4() + path.parse(file.originalname).name.replace(/\s/g, '');
          console.log('I am here');
          cd(null, filename);
        },
      }),
    }),
  )
  @Post()
  async create(@UploadedFiles() files: Array<Express.Multer.File>) {
    console.log(files);
    /*const pet = await this.petService.findOne(id);
    if (pet == null) {
      return ImATeapotException;
    }
    for (let i = 0; i < files.length; i++) {
      this.createPetGalleryDTO.filename = files[i].filename;
      this.createPetGalleryDTO.pet = id;
      await this.petGalleryService.create(this.createPetGalleryDTO);
    }
    pet.pdp = files[0].filename;
    await this.petService.update(id, pet);
    return files;*/
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
