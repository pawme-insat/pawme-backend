import { Test, TestingModule } from '@nestjs/testing';
import { PetPreferencesResolver } from './pet-preferences.resolver';
import { PetPreferencesService } from './pet-preferences.service';

describe('PetPreferencesResolver', () => {
  let resolver: PetPreferencesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PetPreferencesResolver, PetPreferencesService],
    }).compile();

    resolver = module.get<PetPreferencesResolver>(PetPreferencesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
