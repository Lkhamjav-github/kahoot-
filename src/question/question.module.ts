import { Module } from '@nestjs/common';
import { QuestionResolver } from './question.resolver';
import { PrismaClientService } from 'src/prisma-client/prisma-client.service';

@Module({
  imports: [],
  providers: [
    QuestionResolver,
    PrismaClientService,
  ],
})
export class QuestionModule { }
