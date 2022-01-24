import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BreedCharacteristicService } from './breed-characteristic.service';
import { BreedCharacteristic } from './entities/breed-characteristic.entity';
import { CreateBreedCharacteristicInput } from './dto/create-breed-characteristic.input';
import { UpdateBreedCharacteristicInput } from './dto/update-breed-characteristic.input';

@Resolver(() => BreedCharacteristic)
export class BreedCharacteristicResolver {
  constructor(
    private readonly breedCharacteristicService: BreedCharacteristicService,
  ) {}

  @Mutation(() => BreedCharacteristic)
  createBreedCharacteristic(
    @Args('createBreedCharacteristicInput')
    createBreedCharacteristicInput: CreateBreedCharacteristicInput,
  ) {
    return this.breedCharacteristicService.create(
      createBreedCharacteristicInput,
    );
  }

  @Query(() => [BreedCharacteristic], { name: 'breed_Characteristics' })
  findAll() {
    return this.breedCharacteristicService.findAll({});
  }

  @Query(() => BreedCharacteristic, { name: 'breed_Characteristic' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.breedCharacteristicService.findOne(id);
  }

  @Mutation(() => BreedCharacteristic)
  updateBreedCharacteristic(
    @Args('updateBreedCharacteristicInput')
    updateBreedCharacteristicInput: UpdateBreedCharacteristicInput,
  ) {
    return this.breedCharacteristicService.update(
      updateBreedCharacteristicInput.id,
      updateBreedCharacteristicInput,
    );
  }

  @Mutation(() => String)
  removeBreedCharacteristic(@Args('id', { type: () => Int }) id: number) {
    try {
      this.breedCharacteristicService.remove(id);
      return 'Breed Characteristic deleted successfully';
    } catch (e) {
      return 'Error while deleting breed characteristic';
    }
  }
}
