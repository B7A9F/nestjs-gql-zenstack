import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import {
  DateTimeFilter,
  FloatFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input';
import { CategoryRelationFilter } from 'src/models/categories/dtos/where.args';
import { MenuRelationFilter } from 'src/models/menus/dtos/where.args';
import { RestaurantRelationFilter } from 'src/models/restaurants/dtos/where.args';

@InputType()
export class ProductWhereUniqueInput {
  id: number;
}

@InputType()
export class ProductWhereInputStrict
  implements
    RestrictProperties<ProductWhereInputStrict, Prisma.ProductWhereInput>
{
  id: IntFilter;
  createdAt: DateTimeFilter;
  updatedAt: DateTimeFilter;
  name: StringFilter;
  type: StringFilter;
  price: FloatFilter;
  restaurantId: IntFilter;
  menuId: IntFilter;
  categoryId: IntFilter;
  category: CategoryRelationFilter;
  menu: MenuRelationFilter;
  restaurant: RestaurantRelationFilter;
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: ProductWhereInput[];
  OR: ProductWhereInput[];
  NOT: ProductWhereInput[];
}

@InputType()
export class ProductWhereInput extends PartialType(ProductWhereInputStrict) {}

@InputType()
export class ProductListRelationFilter {
  every?: ProductWhereInput;
  some?: ProductWhereInput;
  none?: ProductWhereInput;
}

@InputType()
export class ProductRelationFilter {
  is?: ProductWhereInput;
  isNot?: ProductWhereInput;
}
