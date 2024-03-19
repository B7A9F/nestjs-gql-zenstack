import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import {
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input';
import { CategoryListRelationFilter } from 'src/models/categories/dtos/where.args';
import { MenuRelationFilter } from 'src/models/menus/dtos/where.args';
import { ProductListRelationFilter } from 'src/models/products/dtos/where.args';

@InputType()
export class RestaurantWhereUniqueInput {
  id: number;
}

@InputType()
export class RestaurantWhereInputStrict
  implements
    RestrictProperties<RestaurantWhereInputStrict, Prisma.RestaurantWhereInput>
{
  id: IntFilter;
  createdAt: DateTimeFilter;
  updatedAt: DateTimeFilter;
  name: StringFilter;
  description: StringFilter;
  categories: CategoryListRelationFilter;
  menu: MenuRelationFilter;
  products: ProductListRelationFilter;
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: RestaurantWhereInput[];
  OR: RestaurantWhereInput[];
  NOT: RestaurantWhereInput[];
}

@InputType()
export class RestaurantWhereInput extends PartialType(
  RestaurantWhereInputStrict,
) {}

@InputType()
export class RestaurantListRelationFilter {
  every?: RestaurantWhereInput;
  some?: RestaurantWhereInput;
  none?: RestaurantWhereInput;
}

@InputType()
export class RestaurantRelationFilter {
  is?: RestaurantWhereInput;
  isNot?: RestaurantWhereInput;
}
