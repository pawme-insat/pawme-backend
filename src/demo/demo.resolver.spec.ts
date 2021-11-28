import { Test, TestingModule } from '@nestjs/testing';
import { DemoResolver } from './demo.resolver';
import { DemoService } from './demo.service';

describe('DemoResolver', () => {
  let resolver: DemoResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DemoResolver, DemoService],
    }).compile();

    resolver = module.get<DemoResolver>(DemoResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
