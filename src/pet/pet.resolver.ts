import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PetService } from './pet.service';
import { Pet } from './entities/pet.entity';
import { CreatePetInput } from './dto/create-pet.input';
import { UpdatePetInput } from './dto/update-pet.input';

@Resolver(() => Pet)
export class PetResolver {
  constructor(private readonly petService: PetService) {}

  @Mutation(() => Pet)
  createPet(@Args('createPetInput') createPetInput: CreatePetInput) {
    console.log(createPetInput);
    // TODO replace with proper breedType logic , get name from property and use typeorm find one to check it exists else create it
    return this.petService.create(createPetInput);
  }

  @Query(() => [Pet], { name: 'pets' })
  findAll() {
    return this.petService.findAll({});
  }

  @Query(() => Pet, { name: 'pet' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.petService.findOne(id);
  }

  @Mutation(() => Pet)
  updatePet(@Args('updatePetInput') updatePetInput: UpdatePetInput) {
    return this.petService.update(updatePetInput.id, updatePetInput);
  }

  @Mutation(() => String)
  removePet(@Args('id', { type: () => Int }) id: number) {
    try {
      this.petService.remove(id);
      return 'Pet deleted successfully';
    } catch (e) {
      return 'Error while deleting pet';
    }
  }
}
