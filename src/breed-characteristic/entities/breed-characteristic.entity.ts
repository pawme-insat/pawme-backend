import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class BreedCharacteristic {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
