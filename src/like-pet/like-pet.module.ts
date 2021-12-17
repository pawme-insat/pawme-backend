import { Module } from '@nestjs/common';
import { LikePetService } from './like-pet.service';
import { LikePetResolver } from './like-pet.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LikePet } from './entities/like-pet.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LikePet])],
  providers: [LikePetResolver, LikePetService],
})
export class LikePetModule {}
