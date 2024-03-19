import { CreateMenuInput } from './create-menu.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { Menu } from '@prisma/client'

@InputType()
export class UpdateMenuInput extends PartialType(CreateMenuInput) {
  id: Menu['id']
}
