import { ObjectType } from '@nestjs/graphql';
import { Menu as MenuType } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';

@ObjectType()
export class Menu implements RestrictProperties<Menu, MenuType> {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  restaurantId: number;
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
