import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { PlayerWhereInput } from './player-where.input';

@ArgsType()
export class PlayerFindManyArgs {
    @Field(() => PlayerWhereInput, { nullable: true })
    @Type(() => PlayerWhereInput)
    where?: PlayerWhereInput;

    @Field(() => Int, { nullable: true })
    skip?: number;

    @Field(() => Int, { nullable: true })
    take?: number;
}
