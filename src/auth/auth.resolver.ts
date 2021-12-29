import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/signin.dto';
import { RegisterDto } from './dto/register.dto';
import { SignInResponseDto } from './dto/signin-response.dto';
import { User } from '../user/entities/user.entity';
import { ValidateEmailResponseDto } from './dto/validate-email-response.dto';

@Resolver((of) => User)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => User, { name: 'SignUp' })
  registerUser(@Args('registerDto') registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @Query(() => SignInResponseDto)
  login(@Args('credentials') credentials: SignInDto) {
    return this.authService.signin(credentials);
  }

  @Query(() => ValidateEmailResponseDto)
  validateEmail(@Args('email') email: string) {
    return this.authService.validateEmail(email);
  }
}
