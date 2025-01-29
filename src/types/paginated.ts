import { Type } from '@nestjs/common';
import { Field, Int, ObjectType } from '@nestjs/graphql';

export interface IPaginatedType<T> {
    nodes: T[];
    count: number;
}

export function Paginated<T>(classRef: Type<T>): Type<IPaginatedType<T>> {
    @ObjectType({ isAbstract: true })
    abstract class PaginatedType implements IPaginatedType<T> {
        @Field(() => [classRef])
        nodes: T[];

        @Field(() => Int)
        count: number;
    }
    return PaginatedType as Type<IPaginatedType<T>>;
}
