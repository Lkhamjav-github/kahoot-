import { Field, InputType } from '@nestjs/graphql';
import { DateTimeFilter } from 'src/filters/date-time-filter.input';
import { StringFilter } from 'src/filters/string-filter.input';


@InputType()
export class GameWhereInput {
    @Field(() => [GameWhereInput], { nullable: true })
    AND?: GameWhereInput[];

    @Field(() => [GameWhereInput], { nullable: true })
    OR?: GameWhereInput[];

    @Field(() => [GameWhereInput], { nullable: true })
    NOT?: GameWhereInput[];

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
