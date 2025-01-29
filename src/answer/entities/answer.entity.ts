import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Option } from 'src/option/entities/option.entity';
import { Player } from 'src/player/entities/player.entity';
import { Question } from 'src/question/entities/question.entity';

@ObjectType()
export class Answer {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  playerId: number;

  @Field(() => Player)
  player: Player;

  @Field(() => Int)
  questionId: number;

  @Field(() => Question)
  question: Question;

  @Field(() => Int)
  optionId: number;

  @Field(() => Option)
  option: Option;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
