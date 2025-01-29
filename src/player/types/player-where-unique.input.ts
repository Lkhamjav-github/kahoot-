import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID } from 'class-validator';

@InputType()
export class PlayerWhereUniqueInput {
    @Field({ nullable: true })
    @IsNotEmpty()
    @IsUUID('4')
    id: number;
}
