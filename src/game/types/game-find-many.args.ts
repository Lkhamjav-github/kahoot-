import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { GameWhereInput } from './game-where.input';

@ArgsType()
export class GameFindManyArgs {
    @Field(() => GameWhereInput, { nullable: true })
    @Type(() => GameWhereInput)
    where?: GameWhereInput;

    @Field(() => Int, { nullable: true })
    skip?: number;

    @Field(() => Int, { nullable: true })
    take?: number;
}
