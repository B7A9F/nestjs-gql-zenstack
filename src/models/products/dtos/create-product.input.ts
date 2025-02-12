import { InputType, PickType } from '@nestjs/graphql';
import { Product } from '../entity/product.entity';

@InputType()
export class CreateProductInput extends PickType(
  Product,
  ['name', 'type', 'price', 'categoryId', 'menuId', 'restaurantId'],
  InputType,
) {}
