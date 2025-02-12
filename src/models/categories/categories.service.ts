import { Injectable } from '@nestjs/common';
import { FindManyCategoryArgs, FindUniqueCategoryArgs } from './dtos/find.args';
import { EnhancedPrismaService as PrismaService } from 'src/common/prisma/enhancedPrisma.service';
import { CreateCategoryInput } from './dtos/create-category.input';
import { UpdateCategoryInput } from './dtos/update-category.input';

@Injectable()
export class CategoriesService {
  constructor(private readonly prisma: PrismaService) {}
  create(createCategoryInput: CreateCategoryInput) {
    return this.prisma.category.create({
      data: createCategoryInput,
    });
  }

  findAll(args: FindManyCategoryArgs) {
    return this.prisma.category.findMany(args);
  }

  findOne(args: FindUniqueCategoryArgs) {
    return this.prisma.category.findUnique(args);
  }

  update(updateCategoryInput: UpdateCategoryInput) {
    const { id, ...data } = updateCategoryInput;
    return this.prisma.category.update({
      where: { id },
      data: data,
    });
  }

  remove(args: FindUniqueCategoryArgs) {
    return this.prisma.category.delete(args);
  }
}
