import { ObjectType, Field, Int } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@ObjectType()
export class Game {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  code: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}

