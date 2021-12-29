import {Field, InputType} from "@nestjs/graphql";

@InputType()
export class SignInResponseDto {
  @Field()
  token: string;
}
