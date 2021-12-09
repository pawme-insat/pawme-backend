import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Breed {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
