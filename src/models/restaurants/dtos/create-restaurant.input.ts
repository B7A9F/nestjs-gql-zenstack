import { InputType, PickType } from '@nestjs/graphql';
import { Restaurant } from '../entity/restaurant.entity';

@InputType()
export class CreateRestaurantInput extends PickType(
  Restaurant,
  ['name', 'description'],
  InputType,
) {}
