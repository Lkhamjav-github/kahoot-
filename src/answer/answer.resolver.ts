import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Answer } from './entities/answer.entity';
import { PrismaClientService } from 'src/prisma-client/prisma-client.service';
import { AnswerCreateInput } from './types/answer-create.input';
import { Actions, UseAbility } from 'nest-casl';
import { AnswerFindManyArgs } from './types/answer-find-many.args';
import { paginate } from 'src/helpers';
import { AnswerWhereUniqueInput } from './types/answer-where-unique.input';
import { Question } from 'src/question/entities/question.entity';
import { QuestionHook } from 'src/question/question.hook';
import { AnswerPagination } from './entities/anwer-pagination';
import { AnswerUpdateInput } from './types/answer-update.input';

@Resolver(() => Answer)
export class AnswerResolver {
  constructor(private readonly prismaService: PrismaClientService) { }
  @Mutation(() => Answer)
  @UseAbility(Actions.create, Answer)
  async createAnswer(@Args('data') data: AnswerCreateInput) {
    return await this.prismaService.answer.create({ data });
  }

  @Query(() => AnswerPagination)
  async answers(@Args() args: AnswerFindManyArgs) {
    return await paginate<Answer>(this.prismaService.answer, args);
  }

  @Query(() => Answer)
  async answer(@Args('where') where: AnswerWhereUniqueInput) {
    return await this.prismaService.answer.findUniqueOrThrow({ where });
  }

  @Mutation(() => Answer)
  @UseAbility(Actions.update, Question, QuestionHook)
  async updateAnswer(@Args('where') where: AnswerWhereUniqueInput, @Args('data') data: AnswerUpdateInput) {
    return await this.prismaService.answer.update({ where, data })
  }

  @Mutation(() => Answer)
  @UseAbility(Actions.delete, Question, QuestionHook)
  async deleteAnswer(@Args('where') where: AnswerWhereUniqueInput) {
    return await this.prismaService.answer.delete({ where });
  }
}
