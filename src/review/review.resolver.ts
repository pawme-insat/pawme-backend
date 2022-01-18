import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ReviewService } from './review.service';
import { Review } from './entities/review.entity';
import { CreateReviewInput } from './dto/create-review.input';
import { UpdateReviewInput } from './dto/update-review.input';

@Resolver(() => Review)
export class ReviewResolver {
  constructor(private readonly reviewService: ReviewService) {}

  @Mutation(() => Review)
  createReview(
    @Args('createReviewInput') createReviewInput: CreateReviewInput,
  ) {
    return this.reviewService.create(createReviewInput);
  }

  @Query(() => [Review], { name: 'reviews' })
  findAll() {
    return this.reviewService.findAll({});
  }

  @Query(() => Review, { name: 'review' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.reviewService.findOne(id);
  }

  @Mutation(() => Review)
  updateReview(
    @Args('updateReviewInput') updateReviewInput: UpdateReviewInput,
  ) {
    return this.reviewService.update(updateReviewInput.id, updateReviewInput);
  }

  @Mutation(() => String)
  removeReview(@Args('id', { type: () => Int }) id: number) {
    try {
      this.reviewService.remove(id);
      return 'Review deleted successfully';
    } catch (e) {
      return 'Error while deleting review';
    }
  }
}
