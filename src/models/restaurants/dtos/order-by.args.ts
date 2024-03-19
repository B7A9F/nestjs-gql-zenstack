import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
import { CategoryOrderByRelationAggregateInput } from 'src/models/categories/dtos/order-by.args';
import { MenuOrderByWithRelationInput } from 'src/models/menus/dtos/order-by.args';
import { ProductOrderByRelationAggregateInput } from 'src/models/products/dtos/order-by.args';

@InputType()
export class RestaurantOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      RestaurantOrderByWithRelationInputStrict,
      Prisma.RestaurantOrderByWithRelationInput
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
  description: Prisma.SortOrder;
  categories: CategoryOrderByRelationAggregateInput;
  menu: MenuOrderByWithRelationInput;
  products: ProductOrderByRelationAggregateInput;
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class RestaurantOrderByWithRelationInput extends PartialType(
  RestaurantOrderByWithRelationInputStrict,
) {}

@InputType()
export class RestaurantOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder;
}
