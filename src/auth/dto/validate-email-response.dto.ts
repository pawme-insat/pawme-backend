import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ValidateEmailResponseDto {
  @Field()
  user_exists: boolean;
}
