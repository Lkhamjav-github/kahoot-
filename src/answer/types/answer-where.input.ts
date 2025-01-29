import { Field, InputType } from '@nestjs/graphql';
import { DateTimeFilter } from 'src/filters/date-time-filter.input';
import { StringFilter } from 'src/filters/string-filter.input';


@InputType()
export class AnswerWhereInput {
    @Field(() => [AnswerWhereInput], { nullable: true })
    AND?: AnswerWhereInput[];

    @Field(() => [AnswerWhereInput], { nullable: true })
    OR?: AnswerWhereInput[];

    @Field(() => [AnswerWhereInput], { nullable: true })
    NOT?: AnswerWhereInput[];

    @Field(() => StringFilter, { nullable: true })
    id?: StringFilter;

    @Field(() => StringFilter, { nullable: true })
    score?: StringFilter;

    @Field(() => StringFilter, { nullable: true })
    name?: StringFilter;

    @Field(() => DateTimeFilter, { nullable: true })
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, { nullable: true })
    updatedAt?: DateTimeFilter;
}
