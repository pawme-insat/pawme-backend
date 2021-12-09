import { Test, TestingModule } from '@nestjs/testing';
import { BreedCharacteristicResolver } from './breed-characteristic.resolver';
import { BreedCharacteristicService } from './breed-characteristic.service';

describe('BreedCharacteristicResolver', () => {
  let resolver: BreedCharacteristicResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BreedCharacteristicResolver, BreedCharacteristicService],
    }).compile();

    resolver = module.get<BreedCharacteristicResolver>(BreedCharacteristicResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
