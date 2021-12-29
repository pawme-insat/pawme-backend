import { Test, TestingModule } from '@nestjs/testing';
import { LikePetResolver } from './like-pet.resolver';
import { LikePetService } from './like-pet.service';

describe('LikeResolver', () => {
  let resolver: LikePetResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LikePetResolver, LikePetService],
    }).compile();

    resolver = module.get<LikePetResolver>(LikePetResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
