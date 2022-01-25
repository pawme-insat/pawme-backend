import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategy/jwt.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthResolver } from './auth.resolver';
import * as dotenv from 'dotenv';
dotenv.config();
@Module({
  providers: [AuthService, JwtStrategy, AuthResolver],
  imports: [
    TypeOrmModule.forFeature([User]),
    UserModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.SECRET,
      signOptions: {
        expiresIn: 36000,
      },
    }),
  ],
})
export class AuthModule {}
