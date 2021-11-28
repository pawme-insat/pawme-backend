import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DemoService } from './demo.service';
import { Demo } from './entities/demo.entity';
import { CreateDemoInput } from './dto/create-demo.input';
import { UpdateDemoInput } from './dto/update-demo.input';

@Resolver(() => Demo)
export class DemoResolver {
  constructor(private readonly demoService: DemoService) {}

  @Mutation(() => Demo)
  createDemo(@Args('createDemoInput') createDemoInput: CreateDemoInput) {
    return this.demoService.create(createDemoInput);
  }

  @Query(() => [Demo], { name: 'demo' })
  findAll() {
    return this.demoService.findAll();
  }

  @Query(() => Demo, { name: 'demo' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.demoService.findOne(id);
  }

  @Mutation(() => Demo)
  updateDemo(@Args('updateDemoInput') updateDemoInput: UpdateDemoInput) {
    return this.demoService.update(updateDemoInput.id, updateDemoInput);
  }

  @Mutation(() => Demo)
  removeDemo(@Args('id', { type: () => Int }) id: number) {
    return this.demoService.remove(id);
  }
}
