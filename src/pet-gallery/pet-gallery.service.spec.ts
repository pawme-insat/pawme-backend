import { Test, TestingModule } from '@nestjs/testing';
import { PetGalleryService } from './pet-gallery.service';

describe('PetGalleryService', () => {
  let service: PetGalleryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PetGalleryService],
    }).compile();

    service = module.get<PetGalleryService>(PetGalleryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
