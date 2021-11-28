import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Demo {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
