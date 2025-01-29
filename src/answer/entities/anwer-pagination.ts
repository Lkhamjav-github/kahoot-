import { ObjectType } from '@nestjs/graphql';
import { Paginated } from 'src/types/paginated';
import { Answer } from './answer.entity';

@ObjectType()
export class AnswerPagination extends Paginated(Answer) { }
