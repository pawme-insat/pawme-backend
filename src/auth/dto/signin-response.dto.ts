import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { RegisterDto } from './register.dto';
import { User } from '../../user/entities/user.entity';

@ObjectType()
export class SignInResponseDto {
  @Field()
  token: string;
  @Field()
  user: User;
}
