import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { OptionWhereInput } from './option-where.input';


@ArgsType()
export class OptionFindManyArgs {
    @Field(() => OptionWhereInput, { nullable: true })
    @Type(() => OptionWhereInput)
    where?: OptionWhereInput;

    @Field(() => Int, { nullable: true })
    skip?: number;

    @Field(() => Int, { nullable: true })
    take?: number;
}
