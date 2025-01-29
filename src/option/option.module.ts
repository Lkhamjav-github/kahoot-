import { Module } from '@nestjs/common';
import { OptionResolver } from './option.resolver';
import { PrismaClientService } from 'src/prisma-client/prisma-client.service';

@Module({
  imports: [],
  providers: [
    OptionResolver,
    PrismaClientService,
  ],
})
export class OptionModule { }
