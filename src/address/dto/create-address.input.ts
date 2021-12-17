import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateAddressInput {
  @Field((type) => Int)
  zip_code: number;

  @Field()
  street: string;

  @Field()
  region: string;

  @Field()
  country: string;
}
