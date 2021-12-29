import { Test, TestingModule } from '@nestjs/testing';
import { BreedCharacteristicService } from './breed-characteristic.service';

describe('BreedCharacteristicService', () => {
  let service: BreedCharacteristicService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BreedCharacteristicService],
    }).compile();

    service = module.get<BreedCharacteristicService>(BreedCharacteristicService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
