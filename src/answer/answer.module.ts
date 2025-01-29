import { Module } from '@nestjs/common';
import { AnswerResolver } from './answer.resolver';
import { PrismaClientService } from 'src/prisma-client/prisma-client.service';

@Module({
  imports: [],
  providers: [
    AnswerResolver,
    PrismaClientService,
  ],
})
export class AnswerModule { }
