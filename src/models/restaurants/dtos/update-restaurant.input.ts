import { CreateRestaurantInput } from './create-restaurant.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { Restaurant } from '@prisma/client'

@InputType()
export class UpdateRestaurantInput extends PartialType(CreateRestaurantInput) {
  id: Restaurant['id']
}
