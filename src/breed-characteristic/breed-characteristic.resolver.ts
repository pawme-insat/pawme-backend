import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BreedCharacteristicService } from './breed-characteristic.service';
import { BreedCharacteristic } from './entities/breed-characteristic.entity';
import { CreateBreedCharacteristicInput } from './dto/create-breed-characteristic.input';
import { UpdateBreedCharacteristicInput } from './dto/update-breed-characteristic.input';

@Resolver(() => BreedCharacteristic)
export class BreedCharacteristicResolver {
  constructor(private readonly breedCharacteristicService: BreedCharacteristicService) {}

  @Mutation(() => BreedCharacteristic)
  createBreedCharacteristic(@Args('createBreedCharacteristicInput') createBreedCharacteristicInput: CreateBreedCharacteristicInput) {
    return this.breedCharacteristicService.create(createBreedCharacteristicInput);
  }

  @Query(() => [BreedCharacteristic], { name: 'breedCharacteristic' })
  findAll() {
    return this.breedCharacteristicService.findAll();
  }

  @Query(() => BreedCharacteristic, { name: 'breedCharacteristic' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.breedCharacteristicService.findOne(id);
  }

  @Mutation(() => BreedCharacteristic)
  updateBreedCharacteristic(@Args('updateBreedCharacteristicInput') updateBreedCharacteristicInput: UpdateBreedCharacteristicInput) {
    return this.breedCharacteristicService.update(updateBreedCharacteristicInput.id, updateBreedCharacteristicInput);
  }

  @Mutation(() => BreedCharacteristic)
  removeBreedCharacteristic(@Args('id', { type: () => Int }) id: number) {
    return this.breedCharacteristicService.remove(id);
  }
}
