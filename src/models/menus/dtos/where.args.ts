import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import {
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input';
import { CategoryListRelationFilter } from 'src/models/categories/dtos/where.args';
import { ProductListRelationFilter } from 'src/models/products/dtos/where.args';
import { RestaurantRelationFilter } from 'src/models/restaurants/dtos/where.args';

@InputType()
export class MenuWhereUniqueInput {
  id: number;
}

@InputType()
export class MenuWhereInputStrict
  implements RestrictProperties<MenuWhereInputStrict, Prisma.MenuWhereInput>
{
  id: IntFilter;
  createdAt: DateTimeFilter;
  updatedAt: DateTimeFilter;
  name: StringFilter;
  restaurantId: IntFilter;
  categories: CategoryListRelationFilter;
  restaurant: RestaurantRelationFilter;
  products: ProductListRelationFilter;
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: MenuWhereInput[];
  OR: MenuWhereInput[];
  NOT: MenuWhereInput[];
}

@InputType()
export class MenuWhereInput extends PartialType(MenuWhereInputStrict) {}

@InputType()
export class MenuListRelationFilter {
  every?: MenuWhereInput;
  some?: MenuWhereInput;
  none?: MenuWhereInput;
}

@InputType()
export class MenuRelationFilter {
  is?: MenuWhereInput;
  isNot?: MenuWhereInput;
}
