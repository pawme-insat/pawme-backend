import { BadRequestException, Injectable } from '@nestjs/common';

import { User } from 'src/user/entities/user.entity';
import { RegisterDto } from './dto/register.dto';
import { SignInDto } from './dto/signin.dto';
import { UserService } from '../user/user.service';

import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { PayloadDto } from './dto/payload.dto';
import { SignInResponseDto } from './dto/signin-response.dto';
import { ValidateEmailResponseDto } from './dto/validate-email-response.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto): Promise<User> {
    /*
                Recherche le User
                1- Si existe throw error
                2- Si non
                    générie 🧂
                    générie pwd
                    savi
            */
    const { password, email } = registerDto;
    const user = await this.userService.findUserByEmail(email);
    if (user) {
      throw new BadRequestException('User existant !!');
    } else {
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password, salt);
      registerDto.password = hashedPassword;
      const newUser = await this.userService.create(registerDto);
      delete newUser.password;
      newUser.password = 'hidden';
      return newUser;
    }
  }

  async signin(credentials: SignInDto): Promise<SignInResponseDto> {
    /*
            1- si le   user existe ou pas
            2- on vérifie le mot de passe
            */
    const { email, password } = credentials;
    const user = await this.userService.findUserByEmail(email);
    if (!user) {
      throw new BadRequestException('Bad credentials !!');
    } else {
      const isAuthenticated = await bcrypt.compare(password, user.password);
      if (!isAuthenticated) {
        throw new BadRequestException('Bad credentials  !!');
      } else {
        const payload: PayloadDto = {
          email: user.email,
        };
        const jwt = this.jwtService.sign(payload);
        return {
          token: jwt,
        };
      }
    }
  }

  async validateEmail(email: string): Promise<ValidateEmailResponseDto> {
    const user = await this.userService.findUserByEmail(email);
    return {
      user_exists: !!user,
    };
  }
}
