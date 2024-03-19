import { ObjectType } from '@nestjs/graphql';
import { Restaurant as RestaurantType } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';

@ObjectType()
export class Restaurant
  implements RestrictProperties<Restaurant, RestaurantType>
{
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  description: string;
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
