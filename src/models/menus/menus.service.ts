import { Injectable } from '@nestjs/common';
import { FindManyMenuArgs, FindUniqueMenuArgs } from './dtos/find.args';
import { EnhancedPrismaService as PrismaService } from 'src/common/prisma/enhancedPrisma.service';
import { CreateMenuInput } from './dtos/create-menu.input';
import { UpdateMenuInput } from './dtos/update-menu.input';

@Injectable()
export class MenusService {
  constructor(private readonly prisma: PrismaService) {}
  create(createMenuInput: CreateMenuInput) {
    return this.prisma.menu.create({
      data: createMenuInput,
    });
  }

  findAll(args: FindManyMenuArgs) {
    return this.prisma.menu.findMany(args);
  }

  findOne(args: FindUniqueMenuArgs) {
    return this.prisma.menu.findUnique(args);
  }

  update(updateMenuInput: UpdateMenuInput) {
    const { id, ...data } = updateMenuInput;
    return this.prisma.menu.update({
      where: { id },
      data: data,
    });
  }

  remove(args: FindUniqueMenuArgs) {
    return this.prisma.menu.delete(args);
  }
}
