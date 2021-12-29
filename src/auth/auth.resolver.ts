import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/signin.dto';
import { RegisterDto } from './dto/register.dto';
import { Post } from '@nestjs/common';
import { SignInResponseDto } from './dto/signin-response.dto';

@Resolver((of) => SignInResponseDto)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => Post, { name: 'SignUp' })
  registerUser(@Args() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @Query(() => SignInResponseDto)
  login(@Args() credentials: SignInDto) {
    return this.authService.signin(credentials);
  }
}
