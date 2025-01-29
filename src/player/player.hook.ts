import { Injectable } from '@nestjs/common';
import { Request, SubjectBeforeFilterHook } from 'nest-casl';
import { PrismaClientService } from 'src/prisma-client/prisma-client.service';
import { Player } from './entities/player.entity';


@Injectable()
export class PlayerHook implements SubjectBeforeFilterHook<Player, Request> {
    constructor(readonly prismaService: PrismaClientService) { }

    async run({ params }: Request) {
        return Object.assign(new Player(), await this.prismaService.game.findUnique({ where: params.where }));
    }
}
