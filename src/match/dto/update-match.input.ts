import { CreateMatchInput } from './create-match.input';
import { Field, InputType, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMatchInput extends PartialType(CreateMatchInput) {
  @Field(() => Int)
  id: number;

  @Field((type) => Boolean)
  isSeenRight: boolean;

  @Field((type) => Boolean)
  isSeenLeft: boolean;
}
