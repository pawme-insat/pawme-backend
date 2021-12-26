import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import { AuthService } from './auth.service';
import {SignInDto} from "./dto/signin.dto";
import {RegisterDto} from "./dto/register.dto";
import {User} from "../user/entities/user.entity";
import {Post} from "@nestjs/common";

@Resolver()
export class AuthResolver {
    constructor(private readonly authService: AuthService) {

    @Mutation(returns => Post)
        registerUser (@Args({ name : 'registerDTO', type() => RegisterDto}) registerDto: RegisterDto) {
            return this.authService.register(registerDto);
        }

    @Query(returns => SignInResponseDto)
    login (@Args() credentials: SignInDto) {
            return this.authService.signin(credentials);
        }
    }
}