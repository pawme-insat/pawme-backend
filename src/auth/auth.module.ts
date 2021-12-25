import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import * as dotenv from 'dotenv';
import { JwtStrategy } from './strategy/jwt.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';

dotenv.config();
@Module({
  providers: [AuthService, JwtStrategy],
  imports: [
    TypeOrmModule.forFeature([User]),
    UserModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.SECRET,
      signOptions: {
        expiresIn: 3600,
      },
    }),
  ],
  controllers: [AuthController],
})
export class AuthModule {}
