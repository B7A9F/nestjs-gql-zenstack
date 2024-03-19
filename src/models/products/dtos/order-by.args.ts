import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
import { CategoryOrderByWithRelationInput } from 'src/models/categories/dtos/order-by.args';
import { MenuOrderByWithRelationInput } from 'src/models/menus/dtos/order-by.args';
import { RestaurantOrderByWithRelationInput } from 'src/models/restaurants/dtos/order-by.args';

@InputType()
export class ProductOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      ProductOrderByWithRelationInputStrict,
      Prisma.ProductOrderByWithRelationInput
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
  type: Prisma.SortOrder;
  @Field(() => Prisma.SortOrder)
  price: Prisma.SortOrder;
  @Field(() => Prisma.SortOrder)
  restaurantId: Prisma.SortOrder;
  @Field(() => Prisma.SortOrder)
  menuId: Prisma.SortOrder;
  @Field(() => Prisma.SortOrder)
  categoryId: Prisma.SortOrder;
  category: CategoryOrderByWithRelationInput;
  menu: MenuOrderByWithRelationInput;
  restaurant: RestaurantOrderByWithRelationInput;
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class ProductOrderByWithRelationInput extends PartialType(
  ProductOrderByWithRelationInputStrict,
) {}

@InputType()
export class ProductOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder;
}
