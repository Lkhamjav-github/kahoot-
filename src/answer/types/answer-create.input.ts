import { Field, InputType, Int } from '@nestjs/graphql';
import { IsInt, IsNotEmpty } from 'class-validator';

@InputType()
export class AnswerCreateInput {
    @Field(() => Int)
    @IsInt()
    @IsNotEmpty({ message: "PlayerId байхгүй байна" })
    playerId: number;

    @Field(() => Int)
    @IsInt()
    @IsNotEmpty({ message: "QuestionId байхгүй байна" })
    questionId: number;

    @Field(() => Int)
    @IsInt()
    @IsNotEmpty({ message: "OptionId байхгүй байна" })
    optionId: number;
}
