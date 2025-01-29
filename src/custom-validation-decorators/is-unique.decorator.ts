import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export function IsUnique(property: string, validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isUnique',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [property],
      options: validationOptions,
      validator: {
        async validate(value: any, args: ValidationArguments) {
          const [relatedPropertyName] = args.constraints;
          const where = { [relatedPropertyName]: value };
          const record = await prisma[args.object.constructor.name.toLowerCase()].findUnique({ where });
          return !record;
        },
      },
    });
  };
}

async function generateUniqueCode(length: number = 6): Promise<string> {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code: string;

  do {
    code = '';
    for (let i = 0; i < length; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    const existingGame = await prisma.game.findUnique({ where: { code } });
    if (!existingGame) break;
  } while (true);

  return code;
}
export { generateUniqueCode }