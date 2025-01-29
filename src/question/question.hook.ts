import { Injectable } from '@nestjs/common';
import { Request, SubjectBeforeFilterHook } from 'nest-casl';
import { PrismaClientService } from 'src/prisma-client/prisma-client.service';
import { Question } from './entities/question.entity';


@Injectable()
export class QuestionHook implements SubjectBeforeFilterHook<Question, Request> {
    constructor(readonly prismaService: PrismaClientService) { }

    async run({ params }: Request) {
        return Object.assign(new Question(), await this.prismaService.game.findUnique({ where: params.where }));
    }
}
