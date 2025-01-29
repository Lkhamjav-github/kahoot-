import { Field, InputType, Int } from '@nestjs/graphql';
import { Transform } from 'class-transformer';
import { IsInt, IsNotEmpty, MaxLength } from 'class-validator';

@InputType()
export class PlayerCreateInput {

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

    @Field(() => Int)
    @IsInt()
    @IsNotEmpty({ message: 'GameId оруулна уу' })
    gameId: number;

}
