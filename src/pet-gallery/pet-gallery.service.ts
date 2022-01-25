import { Injectable } from '@nestjs/common';
import { GenericService } from '../generics/generic/generic.service';
import { PetGallery } from './entities/pet-gallery.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PetGalleryService extends GenericService<PetGallery> {
  constructor(
    @InjectRepository(PetGallery)
    private readonly myRepository: Repository<PetGallery>,
  ) {
    super(myRepository, { useSoftDelete: true });
  }
}
