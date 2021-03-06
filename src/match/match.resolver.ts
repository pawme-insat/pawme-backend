import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { MatchService } from './match.service';
import { Match } from './entities/match.entity';
import { CreateMatchInput } from './dto/create-match.input';
import { UpdateMatchInput } from './dto/update-match.input';

@Resolver(() => Match)
export class MatchResolver {
  constructor(private readonly matchService: MatchService) {}

  @Mutation(() => Match)
  createMatch(@Args('createMatchInput') createMatchInput: CreateMatchInput) {
    return this.matchService.create(createMatchInput);
  }

  @Query(() => [Match], { name: 'matches' })
  findAll() {
    return this.matchService.findAll({});
  }

  @Query(() => Match, { name: 'match' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.matchService.findOne(id);
  }

  @Mutation(() => Match)
  updateMatch(@Args('updateMatchInput') updateMatchInput: UpdateMatchInput) {
    return this.matchService.update(updateMatchInput.id, updateMatchInput);
  }

  @Mutation(() => Match)
  removeMatch(@Args('id', { type: () => Int }) id: number) {
    try {
      this.matchService.remove(id);
      return 'Match deleted successfully';
    } catch (e) {
      return 'Error while deleting match';
    }
  }
}
