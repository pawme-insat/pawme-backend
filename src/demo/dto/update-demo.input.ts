import { CreateDemoInput } from './create-demo.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDemoInput extends PartialType(CreateDemoInput) {
  @Field(() => Int)
  id: number;
}
