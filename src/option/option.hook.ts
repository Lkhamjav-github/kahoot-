import { Injectable } from '@nestjs/common';
import { Request, SubjectBeforeFilterHook } from 'nest-casl';
import { PrismaClientService } from 'src/prisma-client/prisma-client.service';
import { Option } from './entities/option.entity';


@Injectable()
export class OptionHook implements SubjectBeforeFilterHook<Option, Request> {
    constructor(readonly prismaService: PrismaClientService) { }

    async run({ params }: Request) {
        return Object.assign(new Option(), await this.prismaService.game.findUnique({ where: params.where }));
    }
}
