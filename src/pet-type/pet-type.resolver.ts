import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PetTypeService } from './pet-type.service';
import { PetType } from './entities/pet-type.entity';
import { CreatePetTypeInput } from './dto/create-pet-type.input';
import { UpdatePetTypeInput } from './dto/update-pet-type.input';

@Resolver(() => PetType)
export class PetTypeResolver {
  constructor(private readonly typeService: PetTypeService) {}

  @Mutation(() => PetType)
  createType(@Args('createTypeInput') createTypeInput: CreatePetTypeInput) {
    return this.typeService.create(createTypeInput);
  }

  @Query(() => [PetType], { name: 'petTypes' })
  findAll() {
    return this.typeService.findAll({});
  }

  @Query(() => PetType, { name: 'petType' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.typeService.findOne(id);
  }

  @Mutation(() => PetType)
  updateType(@Args('updateTypeInput') updateTypeInput: UpdatePetTypeInput) {
    return this.typeService.update(updateTypeInput.id, updateTypeInput);
  }

  @Mutation(() => PetType)
  removeType(@Args('id', { type: () => Int }) id: number) {
    return this.typeService.remove(id);
  }
}
