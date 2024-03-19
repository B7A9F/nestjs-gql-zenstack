import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
import { CategoryOrderByRelationAggregateInput } from 'src/models/categories/dtos/order-by.args';
import { ProductOrderByRelationAggregateInput } from 'src/models/products/dtos/order-by.args';
import { RestaurantOrderByWithRelationInput } from 'src/models/restaurants/dtos/order-by.args';

@InputType()
export class MenuOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      MenuOrderByWithRelationInputStrict,
      Prisma.MenuOrderByWithRelationInput
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
  categories: CategoryOrderByRelationAggregateInput;
  restaurant: RestaurantOrderByWithRelationInput;
  products: ProductOrderByRelationAggregateInput;
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class MenuOrderByWithRelationInput extends PartialType(
  MenuOrderByWithRelationInputStrict,
) {}

@InputType()
export class MenuOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder;
}
