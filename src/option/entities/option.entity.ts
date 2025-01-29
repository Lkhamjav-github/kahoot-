import { ObjectType, Field, Int } from '@nestjs/graphql';
import { IsInt, IsNotEmpty } from 'class-validator';
import { Answer } from 'src/answer/entities/answer.entity';
import { Question } from 'src/question/entities/question.entity';


@ObjectType()
export class Option {
  @Field(() => Int)
  @IsInt()
  id: number;

  @Field()
  text: string;

  @Field(() => Boolean)
  isCorrect: boolean;

  @Field(() => Int)
  questionId: number;

  @Field(() => Question)
  question: Question;

  @Field(() => [Answer])
  answers: Answer[];

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
