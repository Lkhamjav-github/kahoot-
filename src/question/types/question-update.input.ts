import { InputType, Field, PartialType, Int } from '@nestjs/graphql';
import { Transform } from 'class-transformer';
import { IsInt, IsNotEmpty, MaxLength } from 'class-validator';
import { QuestionCreateInput } from './question-create.input';

@InputType()
export class QuestionUpdateInput extends PartialType(QuestionCreateInput) {

    @Field({ nullable: true })
    @Transform(({ value }) => value?.trim())
    @MaxLength(191)
    @IsNotEmpty({ message: 'Оноо оруулна уу' })
    score: number;

    @Field({ nullable: true })
    @Transform(({ value }) => value?.trim())
    @MaxLength(191)
    @IsNotEmpty({ message: 'Нэр оруулна уу' })
    name: string;

    @Field(() => Int, { nullable: true })
    @IsInt()
    gameId?: number;
}
