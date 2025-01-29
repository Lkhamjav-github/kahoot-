import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Game } from './entities/game.entity';
import { PrismaClientService } from 'src/prisma-client/prisma-client.service';
import { GameCreateInput } from './types/game-create.input';
import { GamePagination } from './entities/game-pagination';
import { GameFindManyArgs } from './types/game-find-many.args';
import { paginate } from 'src/helpers';
import { GameWhereUniqueInput } from './types/game-where-unique.input';
import { Actions, UseAbility } from 'nest-casl';
import { GameHook } from './game.hook';
import { GameUpdateInput } from './types/game-update.input';
import { generateUniqueCode } from 'src/custom-validation-decorators/is-unique.decorator';

@Resolver(() => Game)
export class GameResolver {
  constructor(private readonly prismaService: PrismaClientService) { }

  @Mutation(() => Game)
  async createGame(@Args('data') data: GameCreateInput): Promise<Game> {
    const uniqueCode = await generateUniqueCode();
    return this.prismaService.game.create({
      data: {
        ...data,
        code: uniqueCode,
      },
    });
  }

  @Query(() => GamePagination)
  async games(@Args() args: GameFindManyArgs) {
    return await paginate<Game>(this.prismaService.game, args);
  }

  @Query(() => Game)
  async game(@Args('where') where: GameWhereUniqueInput) {
    return await this.prismaService.game.findUniqueOrThrow({ where });
  }

  @Mutation(() => Game)
  @UseAbility(Actions.update, Game, GameHook)
  async update(@Args('where') where: GameWhereUniqueInput, @Args('data') data: GameUpdateInput) {
    return await this.prismaService.game.update({ where, data })
  }

  @Mutation(() => Game)
  @UseAbility(Actions.delete, Game, GameHook)
  async delete(@Args('where') where: GameWhereUniqueInput) {
    return await this.prismaService.game.delete({ where });
  }
}