import { IPaginatedType } from './types/paginated';

export async function paginate<T>(model: any, args: any): Promise<IPaginatedType<T>> {
    const [
        count,
        nodes
    ] = await Promise.all<any>([
        model.count({ where: args.where }),
        model.findMany(args)
    ]);

    return {
        count,
        nodes
    };
};
