import { InputType, PickType } from '@nestjs/graphql';
import { Menu } from '../entity/menu.entity';

@InputType()
export class CreateMenuInput extends PickType(
  Menu,
  ['name', 'restaurantId'],
  InputType,
) {}
