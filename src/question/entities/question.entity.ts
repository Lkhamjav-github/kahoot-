import { ObjectType, Field, Int } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { Answer } from 'src/answer/entities/answer.entity';
import { Option } from 'src/option/entities/option.entity';

@ObjectType()
export class Question {
  @Field(() => Int)
  id: number;

  @Field()
  text: string;

  @Field(() => Int, { nullable: true })
  gameId?: number;

  @Field(() => [Option])
  options: Option[];

  @Field(() => [Answer])
  answers: Answer[];

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
