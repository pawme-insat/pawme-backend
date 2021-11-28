import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateDemoInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
