import { ObjectType, Field, ID } from '@nestjs/graphql';
import { IsInt, IsNotEmpty } from 'class-validator';
import { Answer } from 'src/answer/entities/answer.entity';

@ObjectType()
export class Player {
  @Field(() => ID)
  @IsInt()
  id: number;

  @Field()
  name: string;

  @Field()
  score: number;

  @Field()
  gameId: number;

  @Field(() => [Answer], { nullable: true })
  answers?: Answer[];

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
