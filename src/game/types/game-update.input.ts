
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { Transform } from 'class-transformer';
import { IsNotEmpty, MaxLength } from 'class-validator';
import { GameCreateInput } from './game-create.input';

@InputType()
export class GameUpdateInput extends PartialType(GameCreateInput) {
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
}
