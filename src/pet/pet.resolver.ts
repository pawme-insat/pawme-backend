import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PetService } from './pet.service';
import { Pet } from './entities/pet.entity';
import { CreatePetInput } from './dto/create-pet.input';
import { UpdatePetInput } from './dto/update-pet.input';
import { PetTypeService } from '../pet-type/pet-type.service';
import { BreedService } from '../breed/breed.service';
import { CreateBreedInput } from '../breed/dto/create-breed.input';

@Resolver(() => Pet)
export class PetResolver {
  constructor(
    private readonly petService: PetService,
    private readonly petTypeService: PetTypeService,
    private readonly breedService: BreedService,
    private creatBreedDto: CreateBreedInput,
  ) {}

  @Mutation(() => Pet)
  async createPet(
    @Args('createPetInput') createPetInput: CreatePetInput,
    /*@Args('breed') breed: string,
    @Args('petType') petType: number,*/
  ) {
    /*let checkedBreed = await this.breedService.findOneByName(breed);
    if (checkedBreed == null) {
      console.log('breed doesnt exist');
      this.creatBreedDto.name = breed;
      this.creatBreedDto.type = petType;
      checkedBreed = await this.breedService.create(this.creatBreedDto);
      //create breed
    }
    // Add breeddto to createPetInput
    createPetInput.breedType = checkedBreed.id;
    console.log(createPetInput);*/
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
