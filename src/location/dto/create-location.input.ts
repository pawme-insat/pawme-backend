import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateLocationInput {
  @Field((type) => Int)
  zip_code: number;

  @Field()
  street: string;

  @Field()
  region: string;

  @Field()
  country: string;
}
