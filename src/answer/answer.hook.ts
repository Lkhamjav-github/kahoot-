import { Injectable } from '@nestjs/common';
import { Request, SubjectBeforeFilterHook } from 'nest-casl';
import { PrismaClientService } from 'src/prisma-client/prisma-client.service';
import { Answer } from './entities/answer.entity';

@Injectable()
export class AnswerHook implements SubjectBeforeFilterHook<Answer, Request> {
    constructor(readonly prismaService: PrismaClientService) { }

    async run({ params }: Request) {
        return Object.assign(new Answer(), await this.prismaService.game.findUnique({ where: params.where }));
    }
}
