import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { QuestionWhereInput } from './question-where.input';

@ArgsType()
export class QuestionFindManyArgs {
    @Field(() => QuestionWhereInput, { nullable: true })
    @Type(() => QuestionWhereInput)
    where?: QuestionWhereInput;

    @Field(() => Int, { nullable: true })
    skip?: number;

    @Field(() => Int, { nullable: true })
    take?: number;
}
