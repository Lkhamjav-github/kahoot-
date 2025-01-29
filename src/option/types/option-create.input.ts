import { Field, InputType, Int } from '@nestjs/graphql';
import { Transform } from 'class-transformer';
import { IsInt, IsNotEmpty, MaxLength } from 'class-validator';

@InputType()
export class OptionCreateInput {

    @Field({ nullable: true })
    @Transform(({ value }) => value?.trim())
    @MaxLength(191)
    @IsNotEmpty({ message: 'Оноо оруулна уу' })
    text: string;

    @Field(() => Int)
    @IsInt()
    @IsNotEmpty()
    questionId: number;

    @Field(() => Boolean)
    @IsNotEmpty({ message: "Аль зөв сонгож чадсангүй" })
    isCorrect: boolean;
}