import { InputType, Field, Int } from '@nestjs/graphql';
import { IsInt, IsNotEmpty } from 'class-validator';
import { IsUnique } from 'src/custom-validation-decorators/is-unique.decorator';


@InputType()
export class GameCreateInput {
    @Field(() => Int, { nullable: true })
    @IsInt()
    @IsNotEmpty()
    id: number;

    @Field({ nullable: true })
    @IsNotEmpty({ message: 'Нэр оруулна уу' })
    name: string;

    @Field()
    @IsUnique('code', { message: 'uniq aldaa ' })
    @IsNotEmpty({ message: 'Код оруулна уу' })
    code: string;
}
