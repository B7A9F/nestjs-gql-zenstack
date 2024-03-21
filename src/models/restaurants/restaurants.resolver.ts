import {
  Resolver,
  Query,
  Mutation,
  Args,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { RestaurantsService } from './restaurants.service';
import { Restaurant } from './entity/restaurant.entity';
import {
  FindManyRestaurantArgs,
  FindUniqueRestaurantArgs,
} from './dtos/find.args';
import { CreateRestaurantInput } from './dtos/create-restaurant.input';
import { UpdateRestaurantInput } from './dtos/update-restaurant.input';
import { EnhancedPrismaService as PrismaService } from 'src/common/prisma/enhancedPrisma.service';
import { Menu } from '../menus/entity/menu.entity';
import { Category } from '../categories/entity/category.entity';

@Resolver(() => Restaurant)
export class RestaurantsResolver {
  constructor(
    private readonly restaurantsService: RestaurantsService,
    private readonly prisma: PrismaService,
  ) {}

  @Mutation(() => Restaurant)
  createRestaurant(@Args('createRestaurantInput') args: CreateRestaurantInput) {
    return this.restaurantsService.create(args);
  }

  @Query(() => [Restaurant], { name: 'restaurants' })
  findAll(@Args() args: FindManyRestaurantArgs) {
    return this.restaurantsService.findAll(args);
  }

  @Query(() => Restaurant, { name: 'restaurant' })
  findOne(@Args() args: FindUniqueRestaurantArgs) {
    return this.restaurantsService.findOne(args);
  }

  @Mutation(() => Restaurant)
  async updateRestaurant(
    @Args('updateRestaurantInput') args: UpdateRestaurantInput,
  ) {
    const restaurant = await this.prisma.restaurant.findUnique({
      where: { id: args.id },
    });
    return this.restaurantsService.update(args);
  }

  @Mutation(() => Restaurant)
  async removeRestaurant(@Args() args: FindUniqueRestaurantArgs) {
    const restaurant = await this.prisma.restaurant.findUnique(args);
    return this.restaurantsService.remove(args);
  }
  @ResolveField(() => Menu)
  menu(@Parent() parent: Restaurant) {
    return this.prisma.restaurant
      .findUnique({
        where: { id: parent.id },
      })
      .menu();
  }

  @ResolveField(() => [Category])
  categories(@Parent() parent: Restaurant) {
    return this.prisma.restaurant
      .findUnique({
        where: { id: parent.id },
      })
      .categories();
  }
}
