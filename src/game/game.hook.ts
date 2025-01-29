import { Injectable } from '@nestjs/common';
import { Request, SubjectBeforeFilterHook } from 'nest-casl';
import { PrismaClientService } from 'src/prisma-client/prisma-client.service';
import { Game } from './entities/game.entity';

@Injectable()
export class GameHook implements SubjectBeforeFilterHook<Game, Request> {
    constructor(readonly prismaService: PrismaClientService) { }

    async run({ params }: Request) {
        return Object.assign(new Game(), await this.prismaService.game.findUnique({ where: params.where }));
    }
}
