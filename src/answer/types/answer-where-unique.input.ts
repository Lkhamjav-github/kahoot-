import { Field, InputType } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, IsUUID } from 'class-validator';

@InputType()
export class AnswerWhereUniqueInput {
    @Field({ nullable: true })
    @IsNotEmpty()
    @IsInt()
    @IsUUID('4')
    id: number;
}
