import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { PrismaClientModule } from './prisma-client/prisma-client.module';
import { join } from 'path';
import { GameModule } from './game/game.module';
import { PlayerModule } from './player/player.module';
import { QuestionModule } from './question/question.module';
import { OptionModule } from './option/option.module';
import { AnswerModule } from './answer/answer.module';


@Module({
  imports: [
    PrismaClientModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    GameModule,
    PlayerModule,
    QuestionModule,
    OptionModule,
    AnswerModule
  ],
})
export class AppModule { }
