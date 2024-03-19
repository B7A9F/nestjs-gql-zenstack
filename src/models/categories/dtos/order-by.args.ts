import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
import { MenuOrderByWithRelationInput } from 'src/models/menus/dtos/order-by.args';
import { ProductOrderByRelationAggregateInput } from 'src/models/products/dtos/order-by.args';
import { RestaurantOrderByWithRelationInput } from 'src/models/restaurants/dtos/order-by.args';

@InputType()
export class CategoryOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      CategoryOrderByWithRelationInputStrict,
      Prisma.CategoryOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder;
  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder;
  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder;
  @Field(() => Prisma.SortOrder)
  name: Prisma.SortOrder;
  @Field(() => Prisma.SortOrder)
  restaurantId: Prisma.SortOrder;
  @Field(() => Prisma.SortOrder)
  menuId: Prisma.SortOrder;
  menu: MenuOrderByWithRelationInput;
  restaurant: RestaurantOrderByWithRelationInput;
  products: ProductOrderByRelationAggregateInput;
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class CategoryOrderByWithRelationInput extends PartialType(
  CategoryOrderByWithRelationInputStrict,
) {}

@InputType()
export class CategoryOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder;
}
