import { ObjectType } from '@nestjs/graphql';
import { Paginated } from 'src/types/paginated';
import { Question } from './question.entity';

@ObjectType()
export class QuestionPagination extends Paginated(Question) { }
