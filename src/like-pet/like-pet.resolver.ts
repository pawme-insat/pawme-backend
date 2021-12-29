import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LikePetService } from './like-pet.service';
import { LikePet } from './entities/like-pet.entity';
import { CreateLikePetInput } from './dto/create-like-pet.input';
import { UpdateLikePetInput } from './dto/update-like-pet.input';

@Resolver(() => LikePet)
export class LikePetResolver {
  constructor(private readonly likeService: LikePetService) {}

  @Mutation(() => LikePet)
  createLike(@Args('createLikeInput') createLikeInput: CreateLikePetInput) {
    return this.likeService.create(createLikeInput);
  }

  @Query(() => [LikePet], { name: 'petLikes' })
  findAll() {
    return this.likeService.findAll({});
  }

  @Query(() => LikePet, { name: 'petLike' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.likeService.findOne(id);
  }

  @Mutation(() => LikePet)
  updateLike(@Args('updateLikeInput') updateLikeInput: UpdateLikePetInput) {
    return this.likeService.update(updateLikeInput.id, updateLikeInput);
  }

  @Mutation(() => LikePet)
  removeLike(@Args('id', { type: () => Int }) id: number) {
    return this.likeService.remove(id);
  }
}
