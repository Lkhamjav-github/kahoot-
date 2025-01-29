import { ObjectType } from '@nestjs/graphql';
import { Paginated } from 'src/types/paginated';
import { Game } from './game.entity';

@ObjectType()
export class GamePagination extends Paginated(Game) { }
