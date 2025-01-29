import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Question } from './entities/question.entity';
import { QuestionCreateInput } from './types/question-create.input';
import { QuestionUpdateInput } from './types/question-update.input';
import { PrismaClientService } from 'src/prisma-client/prisma-client.service';
import { QuestionPagination } from './entities/question-pagination';
import { QuestionFindManyArgs } from './types/question-find-many.args';
import { paginate } from 'src/helpers';
import { QuestionWhereUniqueInput } from './types/question-where-unique.input';
import { Actions, UseAbility } from 'nest-casl';
import { QuestionHook } from './question.hook';

@Resolver(() => Question)
export class QuestionResolver {
  constructor(private readonly prismaService: PrismaClientService) { }

  @Mutation(() => Question)
  @UseAbility(Actions.create, Question)
  async createQuestion(@Args('data') data: QuestionCreateInput) {
    return await this.prismaService.question.create({ data });
  }

  @Query(() => QuestionPagination)
  async questions(@Args() args: QuestionFindManyArgs) {
    return await paginate<Question>(this.prismaService.game, args);
  }

  @Query(() => Question)
  async question(@Args('where') where: QuestionWhereUniqueInput) {
    return await this.prismaService.question.findUniqueOrThrow({ where });
  }

  @Mutation(() => Question)
  @UseAbility(Actions.update, Question, QuestionHook)
  async updateQuestion(@Args('where') where: QuestionWhereUniqueInput, @Args('data') data: QuestionUpdateInput) {
    return await this.prismaService.question.update({ where, data });
  }

  @Mutation(() => Question)
  @UseAbility(Actions.delete, Question, QuestionHook)
  async deleteQuestion(@Args('where') where: QuestionWhereUniqueInput) {
    return await this.prismaService.question.delete({ where });
  }
}
