import {
  Resolver,
  Query,
  Mutation,
  Args,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { MenusService } from './menus.service';
import { Menu } from './entity/menu.entity';
import { FindManyMenuArgs, FindUniqueMenuArgs } from './dtos/find.args';
import { CreateMenuInput } from './dtos/create-menu.input';
import { UpdateMenuInput } from './dtos/update-menu.input';

import { PrismaService } from 'src/common/prisma/prisma.service';
import { Category } from '../categories/entity/category.entity';

@Resolver(() => Menu)
export class MenusResolver {
  constructor(
    private readonly menusService: MenusService,
    private readonly prisma: PrismaService,
  ) {}

  @Mutation(() => Menu)
  createMenu(@Args('createMenuInput') args: CreateMenuInput) {
    return this.menusService.create(args);
  }

  @Query(() => [Menu], { name: 'menus' })
  findAll(@Args() args: FindManyMenuArgs) {
    return this.menusService.findAll(args);
  }

  @Query(() => Menu, { name: 'menu' })
  findOne(@Args() args: FindUniqueMenuArgs) {
    return this.menusService.findOne(args);
  }

  @Mutation(() => Menu)
  async updateMenu(@Args('updateMenuInput') args: UpdateMenuInput) {
    const menu = await this.prisma.menu.findUnique({ where: { id: args.id } });
    return this.menusService.update(args);
  }

  @Mutation(() => Menu)
  async removeMenu(@Args() args: FindUniqueMenuArgs) {
    const menu = await this.prisma.menu.findUnique(args);
    return this.menusService.remove(args);
  }
  @ResolveField(() => [Category])
  categories(@Parent() parent: Menu) {
    return this.prisma.menu
      .findUnique({
        where: { id: parent.id },
      })
      .categories();
  }
}
