import { Field, InputType } from '@nestjs/graphql';
import { PetType } from '../../pet-type/entities/pet-type.entity';
import { CreateBreedCharacteristicInput } from '../../breed-characteristic/dto/create-breed-characteristic.input';
import { CreatePetTypeInput } from '../../pet-type/dto/create-pet-type.input';

@InputType()
export class CreateBreedInput {
  @Field()
  name: string;

  @Field((type) => [CreateBreedCharacteristicInput])
  breed_characteristics: CreateBreedCharacteristicInput[];

  @Field((type) => CreatePetTypeInput)
  type: PetType;
}
