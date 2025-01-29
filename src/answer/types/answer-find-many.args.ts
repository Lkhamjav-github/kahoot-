import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { AnswerWhereInput } from './answer-where.input';

@ArgsType()
export class AnswerFindManyArgs {
    @Field(() => AnswerWhereInput, { nullable: true })
    @Type(() => AnswerWhereInput)
    where?: AnswerWhereInput;

    @Field(() => Int, { nullable: true })
    skip?: number;

    @Field(() => Int, { nullable: true })
    take?: number;
}
