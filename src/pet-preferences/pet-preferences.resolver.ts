import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PetPreferencesService } from './pet-preferences.service';
import { PetPreference } from './entities/pet-preference.entity';
import { CreatePetPreferenceInput } from './dto/create-pet-preference.input';
import { UpdatePetPreferenceInput } from './dto/update-pet-preference.input';

@Resolver(() => PetPreference)
export class PetPreferencesResolver {
  constructor(private readonly petPreferencesService: PetPreferencesService) {}

  @Mutation(() => PetPreference)
  createPetPreference(
    @Args('createPetPreferenceInput')
    createPetPreferenceInput: CreatePetPreferenceInput,
  ) {
    return this.petPreferencesService.create(createPetPreferenceInput);
  }

  @Query(() => [PetPreference], { name: 'petPreferences' })
  findAll() {
    return this.petPreferencesService.findAll({});
  }

  @Query(() => PetPreference, { name: 'petPreference' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.petPreferencesService.findOne(id);
  }

  @Mutation(() => PetPreference)
  updatePetPreference(
    @Args('updatePetPreferenceInput')
    updatePetPreferenceInput: UpdatePetPreferenceInput,
  ) {
    return this.petPreferencesService.update(
      updatePetPreferenceInput.id,
      updatePetPreferenceInput,
    );
  }

  @Mutation(() => PetPreference)
  removePetPreference(@Args('id', { type: () => Int }) id: number) {
    return this.petPreferencesService.remove(id);
  }
}
