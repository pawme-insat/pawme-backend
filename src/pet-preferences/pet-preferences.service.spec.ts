import { Test, TestingModule } from '@nestjs/testing';
import { PetPreferencesService } from './pet-preferences.service';

describe('PetPreferencesService', () => {
  let service: PetPreferencesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PetPreferencesService],
    }).compile();

    service = module.get<PetPreferencesService>(PetPreferencesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
