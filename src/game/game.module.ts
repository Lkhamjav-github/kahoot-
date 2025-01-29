import { Module } from '@nestjs/common';
import { GameResolver } from './game.resolver';
import { PrismaClientService } from 'src/prisma-client/prisma-client.service';

@Module({
  imports: [],
  providers: [
    GameResolver,
    PrismaClientService,
  ],
})
export class GameModule { }
