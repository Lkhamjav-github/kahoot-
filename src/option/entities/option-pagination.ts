import { ObjectType } from '@nestjs/graphql';
import { Paginated } from 'src/types/paginated';
import { Option } from './option.entity';

@ObjectType()
export class OptionPagination extends Paginated(Option) { }
