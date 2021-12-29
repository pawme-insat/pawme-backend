import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class PayloadDto {
  @Field()
  email: string;
}
