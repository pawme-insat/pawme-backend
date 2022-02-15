import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LikePetService } from './like-pet.service';
import { LikePet } from './entities/like-pet.entity';
import { CreateLikePetInput } from './dto/create-like-pet.input';
import { UpdateLikePetInput } from './dto/update-like-pet.input';
import { MatchService } from '../match/match.service';
import { PetService } from '../pet/pet.service';

@Resolver(() => LikePet)
export class LikePetResolver {
  constructor(
    private readonly likeService: LikePetService,
    private readonly matchService: MatchService,
    private readonly petService: PetService,
  ) {}

  @Mutation(() => LikePet)
  async createLike(
    @Args('createLikeInput') createLikeInput: CreateLikePetInput,
  ) {
    try {
      const newLike = await this.likeService.create(createLikeInput);
      const allLikes = await this.likeService.findAll({});
      const likesBack = allLikes.filter((like) => {
        return (
          like.pet.id === createLikeInput.likedPet &&
          like.likedPet.id === createLikeInput.pet
        );
      });
      if (likesBack.length) {
        for (const like of likesBack) {
          this.matchService.create({
            likePetRight: newLike,
            likePetLeft: like,
            isSeenRight: false,
            isSeenLeft: false,
          });
        }
      }
      return newLike;
    } catch (e) {
      return e;
    }
  }

  @Query(() => [LikePet], { name: 'pet_likes' })
  findAll() {
    return this.likeService.findAll({});
  }

  @Query(() => LikePet, { name: 'pet_like' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.likeService.findOne(id);
  }

  @Mutation(() => LikePet)
  updateLike(@Args('updateLikeInput') updateLikeInput: UpdateLikePetInput) {
    return this.likeService.update(updateLikeInput.id, updateLikeInput);
  }

  @Mutation(() => LikePet)
  removeLike(@Args('id', { type: () => Int }) id: number) {
    try {
      this.likeService.remove(id);
      return 'Like-Pet deleted successfully';
    } catch (e) {
      return 'Error while deleting like';
    }
  }
}
