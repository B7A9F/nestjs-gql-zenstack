import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CategoriesService } from './categories.service';
import { Category } from './entity/category.entity';
import { FindManyCategoryArgs, FindUniqueCategoryArgs } from './dtos/find.args';
import { CreateCategoryInput } from './dtos/create-category.input';
import { UpdateCategoryInput } from './dtos/update-category.input';

import { PrismaService } from 'src/common/prisma/prisma.service';

@Resolver(() => Category)
export class CategoriesResolver {
  constructor(
    private readonly categoriesService: CategoriesService,
    private readonly prisma: PrismaService,
  ) {}

  @Mutation(() => Category)
  createCategory(@Args('createCategoryInput') args: CreateCategoryInput) {
    return this.categoriesService.create(args);
  }

  @Query(() => [Category], { name: 'categories' })
  findAll(@Args() args: FindManyCategoryArgs) {
    return this.categoriesService.findAll(args);
  }

  @Query(() => Category, { name: 'category' })
  findOne(@Args() args: FindUniqueCategoryArgs) {
    return this.categoriesService.findOne(args);
  }

  @Mutation(() => Category)
  async updateCategory(@Args('updateCategoryInput') args: UpdateCategoryInput) {
    const category = await this.prisma.category.findUnique({
      where: { id: args.id },
    });
    return this.categoriesService.update(args);
  }

  @Mutation(() => Category)
  async removeCategory(@Args() args: FindUniqueCategoryArgs) {
    const category = await this.prisma.category.findUnique(args);
    return this.categoriesService.remove(args);
  }
}
