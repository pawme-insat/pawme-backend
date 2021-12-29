import {Field, InputType, ObjectType} from "@nestjs/graphql";

@ObjectType()
export class SignInResponseDto {
  @Field()
  token: string;
}
