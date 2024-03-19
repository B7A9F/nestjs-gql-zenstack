import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import {
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input';
import { MenuRelationFilter } from 'src/models/menus/dtos/where.args';
import { ProductListRelationFilter } from 'src/models/products/dtos/where.args';
import { RestaurantRelationFilter } from 'src/models/restaurants/dtos/where.args';

@InputType()
export class CategoryWhereUniqueInput {
  id: number;
}

@InputType()
export class CategoryWhereInputStrict
  implements
    RestrictProperties<CategoryWhereInputStrict, Prisma.CategoryWhereInput>
{
  id: IntFilter;
  createdAt: DateTimeFilter;
  updatedAt: DateTimeFilter;
  name: StringFilter;
  restaurantId: IntFilter;
  menuId: IntFilter;
  menu: MenuRelationFilter;
  restaurant: RestaurantRelationFilter;
  products: ProductListRelationFilter;
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: CategoryWhereInput[];
  OR: CategoryWhereInput[];
  NOT: CategoryWhereInput[];
}

@InputType()
export class CategoryWhereInput extends PartialType(CategoryWhereInputStrict) {}

@InputType()
export class CategoryListRelationFilter {
  every?: CategoryWhereInput;
  some?: CategoryWhereInput;
  none?: CategoryWhereInput;
}

@InputType()
export class CategoryRelationFilter {
  is?: CategoryWhereInput;
  isNot?: CategoryWhereInput;
}
