import { Field, InputType, Int } from '@nestjs/graphql';
import { Transform } from 'class-transformer';
import { IsInt, IsNotEmpty, MaxLength } from 'class-validator';

@InputType()
export class QuestionCreateInput {
    @Field(() => Int, { nullable: true })
    id: number;

    @Field({ nullable: true })
    @Transform(({ value }) => value?.trim())
    @MaxLength(191)
    @IsNotEmpty({ message: 'Оноо оруулна уу' })
    text: string;

    @Field()
    createdAt: Date;

    @Field()
    updatedAt: Date;

    @Field(() => Int)
    @IsInt()
    @IsNotEmpty({ message: 'gameId оруулна уу' })
    gameId: number;

}
