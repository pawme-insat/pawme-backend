import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Injectable,
} from '@nestjs/common';
import { PetGalleryService } from './pet-gallery.service';
import { UpdatePetGalleryDto } from './dto/update-pet-gallery.dto';
import { CreatePetGalleryDto } from './dto/create-pet-gallery.dto';
import { deletefile } from '../generics/upload/delete-file-from-server';
import { PetGallery } from './entities/pet-gallery.entity';

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
  findOne(@Param('id') id: string): Promise<PetGallery> {
    return this.petGalleryService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePetGalleryDto: UpdatePetGalleryDto,
  ) {
    const pic = await this.findOne(id);
    if (pic != null) {
      deletefile(pic.filename, process.env.PET_GALLERY);
    }
    return this.petGalleryService.update(+id, updatePetGalleryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.petGalleryService.remove(+id);
  }
}
