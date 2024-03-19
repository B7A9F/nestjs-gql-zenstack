import { ObjectType } from '@nestjs/graphql';
import { Product as ProductType } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';

@ObjectType()
export class Product implements RestrictProperties<Product, ProductType> {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  type: string;
  price: number;
  restaurantId: number;
  menuId: number;
  categoryId: number;
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
