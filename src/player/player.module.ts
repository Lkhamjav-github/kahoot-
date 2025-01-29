import { Module } from '@nestjs/common';
import { PlayerResolver } from './player.resolver';
import { PrismaClientService } from 'src/prisma-client/prisma-client.service';

@Module({
  imports: [],
  providers: [
    PlayerResolver,
    PrismaClientService,
  ],
})
export class PlayerModule { }
