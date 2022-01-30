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
import { PetService } from '../pet/pet.service';
import { CreatePetGalleryDto } from './dto/create-pet-gallery.dto';

@Injectable()
@Controller('pet-gallery')
export class PetGalleryController {
  constructor(private readonly petGalleryService: PetGalleryService) {}

  @Post()
  create(@Body() createPetGalleryDto: CreatePetGalleryDto) {
    return this.petGalleryService.create(createPetGalleryDto);
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
