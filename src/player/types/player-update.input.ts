
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { Transform } from 'class-transformer';
import { IsNotEmpty, MaxLength } from 'class-validator';
import { PlayerCreateInput } from './player-create.input';

@InputType()
export class PlayerUpdateInput extends PartialType(PlayerCreateInput) {
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
