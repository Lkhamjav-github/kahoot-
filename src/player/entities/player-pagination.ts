import { ObjectType } from '@nestjs/graphql';
import { Paginated } from 'src/types/paginated';
import { Player } from './player.entity';

@ObjectType()
export class PlayerPagination extends Paginated(Player) { }
