import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Option } from './entities/option.entity';
import { OptionCreateInput } from './types/option-create.input';
import { OptionUpdateInput } from './types/option-update.input';
import { PrismaClientService } from 'src/prisma-client/prisma-client.service';
import { Actions, UseAbility } from 'nest-casl';
import { OptionFindManyArgs } from './types/option-find-many.args';
import { paginate } from 'src/helpers';
import { OptionWhereUniqueInput } from './types/option-where-unique.input';
import { OptionHook } from './option.hook';

@Resolver(() => Option)
export class OptionResolver {
  constructor(private readonly prismaService: PrismaClientService) { }

  @Mutation(() => Option)
  @UseAbility(Actions.create, Option)
  async createOption(@Args('data') data: OptionCreateInput) {
    return await this.prismaService.option.create({ data });
  }

  @Query(() => [Option])
  async options(@Args() args: OptionFindManyArgs) {
    return await paginate<Option>(this.prismaService.option, args);
  }

  @Query(() => Option)
  async option(@Args('where') where: OptionWhereUniqueInput) {
    return await this.prismaService.option.findUniqueOrThrow({ where });
  }

  @Mutation(() => Option)
  @UseAbility(Actions.update, Option, OptionHook)
  async updateGame(@Args('where') where: OptionWhereUniqueInput, @Args('data') data: OptionUpdateInput) {
    return await this.prismaService.option.update({ where, data })
  }

  @Mutation(() => Option)
  @UseAbility(Actions.delete, Option, OptionHook)
  async delete(@Args('where') where: OptionWhereUniqueInput) {
    return await this.prismaService.option.delete({ where });
  }
}
