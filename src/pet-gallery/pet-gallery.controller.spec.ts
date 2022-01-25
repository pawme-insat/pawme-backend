import { Test, TestingModule } from '@nestjs/testing';
import { PetGalleryController } from './pet-gallery.controller';
import { PetGalleryService } from './pet-gallery.service';

describe('PetGalleryController', () => {
  let controller: PetGalleryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PetGalleryController],
      providers: [PetGalleryService],
    }).compile();

    controller = module.get<PetGalleryController>(PetGalleryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
