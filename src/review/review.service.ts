import { Injectable } from '@nestjs/common';
import { GenericService } from '../generics/generic/generic.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Review } from './entities/review.entity';

@Injectable()
export class ReviewService extends GenericService<Review> {
  constructor(
    @InjectRepository(Review)
    private readonly myRepository: Repository<Review>,
  ) {
    super(myRepository);
  }
}
