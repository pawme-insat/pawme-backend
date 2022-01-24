import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BreedService } from './breed.service';
import { Breed } from './entities/breed.entity';
import { CreateBreedInput } from './dto/create-breed.input';
import { UpdateBreedInput } from './dto/update-breed.input';

@Resolver(() => Breed)
export class BreedResolver {
  constructor(private readonly breedService: BreedService) {}

  @Mutation(() => Breed)
  createBreed(@Args('createBreedInput') createBreedInput: CreateBreedInput) {
    return this.breedService.create(createBreedInput);
  }

  @Query(() => [Breed], { name: 'breeds' })
  findAll() {
    return this.breedService.findAll({});
  }

  @Query(() => Breed, { name: 'breed' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.breedService.findOne(id);
  }

  @Mutation(() => Breed)
  updateBreed(@Args('updateBreedInput') updateBreedInput: UpdateBreedInput) {
    return this.breedService.update(updateBreedInput.id, updateBreedInput);
  }

  @Mutation(() => Breed)
  removeBreed(@Args('id', { type: () => Int }) id: number) {
    try {
      this.breedService.remove(id);
      return 'Breed deleted successfully';
    } catch (e) {
      return 'Error while deleting breed';
    }
  }
}
