import { Module } from '@nestjs/common';
import { LikePetService } from './like-pet.service';
import { LikePetResolver } from './like-pet.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LikePet } from './entities/like-pet.entity';
import { MatchModule } from '../match/match.module';
import { PetModule } from '../pet/pet.module';

@Module({
  imports: [TypeOrmModule.forFeature([LikePet]), MatchModule, PetModule],
  providers: [LikePetResolver, LikePetService],
})
export class LikePetModule {}
