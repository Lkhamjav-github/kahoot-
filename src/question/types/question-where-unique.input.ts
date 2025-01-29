import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID } from 'class-validator';

@InputType()
export class QuestionWhereUniqueInput {
    @Field({ nullable: true })
    @IsNotEmpty({ message: 'question id  оруулна уу' })
    @IsUUID('4')
    id: number;
}
