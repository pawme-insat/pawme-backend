import { Test, TestingModule } from '@nestjs/testing';
import { LikePetService } from './like-pet.service';

describe('LikeService', () => {
  let service: LikePetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LikePetService],
    }).compile();

    service = module.get<LikePetService>(LikePetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
