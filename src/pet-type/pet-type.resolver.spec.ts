import { Test, TestingModule } from '@nestjs/testing';
import { PetTypeResolver } from './pet-type.resolver';
import { PetTypeService } from './pet-type.service';

describe('PetTypeResolver', () => {
  let resolver: PetTypeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PetTypeResolver, PetTypeService],
    }).compile();

    resolver = module.get<PetTypeResolver>(PetTypeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
