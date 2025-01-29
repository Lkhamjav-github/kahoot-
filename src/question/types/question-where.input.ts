import { Field, InputType } from '@nestjs/graphql';
import { DateTimeFilter } from 'src/filters/date-time-filter.input';
import { StringFilter } from 'src/filters/string-filter.input';


@InputType()
export class QuestionWhereInput {
    @Field(() => [QuestionWhereInput], { nullable: true })
    AND?: QuestionWhereInput[];

    @Field(() => [QuestionWhereInput], { nullable: true })
    OR?: QuestionWhereInput[];

    @Field(() => [QuestionWhereInput], { nullable: true })
    NOT?: QuestionWhereInput[];

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
