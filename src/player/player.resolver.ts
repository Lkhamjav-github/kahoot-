import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Player } from './entities/player.entity';
import { PlayerCreateInput } from './types/player-create.input';
import { PlayerUpdateInput } from './types/player-update.input';
import { PrismaClientService } from 'src/prisma-client/prisma-client.service';
import { Actions, UseAbility } from 'nest-casl';
import { PlayerPagination } from './entities/player-pagination';
import { PlayerFindManyArgs } from './types/player-find-many.args';
import { paginate } from 'src/helpers';
import { PlayerWhereUniqueInput } from './types/player-where-unique.input';
import { PlayerHook } from './player.hook';


@Resolver(() => Player)
export class PlayerResolver {
  constructor(private readonly prismaService: PrismaClientService) { }

  @Mutation(() => Player)
  @UseAbility(Actions.create, Player)
  async createPlayer(@Args('data') data: PlayerCreateInput) {
    return await this.prismaService.player.create({ data });
  }

  @Query(() => PlayerPagination)
  async players(@Args() args: PlayerFindManyArgs) {
    return await paginate<Player>(this.prismaService.game, args);
  }

  @Query(() => Player)
  async player(@Args('where') where: PlayerWhereUniqueInput) {
    return this.prismaService.player.findUniqueOrThrow({ where });
  }

  @Mutation(() => Player)
  @UseAbility(Actions.update, Player, PlayerHook)
  async updatePlayer(@Args('where') where: PlayerWhereUniqueInput, @Args('data') data: PlayerUpdateInput) {
    return await this.prismaService.player.update({ where, data });
  }

  @Mutation(() => Player)
  @UseAbility(Actions.delete, Player, PlayerHook)
  async deletePlayer(@Args('where') where: PlayerWhereUniqueInput) {
    return this.prismaService.player.delete({ where });
  }
}
