import { CreateBreedCharacteristicInput } from './create-breed-characteristic.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBreedCharacteristicInput extends PartialType(CreateBreedCharacteristicInput) {
  @Field(() => Int)
  id: number;
}
