import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestaurantOrderByWithRelationInput } from './order-by.args'
import { RestaurantWhereInput, RestaurantWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.RestaurantScalarFieldEnum, {
  name: 'RestaurantScalarFieldEnum',
})

@ArgsType()
class FindManyRestaurantArgsStrict
  implements RestrictProperties<FindManyRestaurantArgsStrict, Omit<Prisma.RestaurantFindManyArgs, 'include' | 'select'>>
{
  where: RestaurantWhereInput
  orderBy: RestaurantOrderByWithRelationInput[]
  cursor: RestaurantWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.RestaurantScalarFieldEnum])
  distinct: Prisma.RestaurantScalarFieldEnum[]
}

@ArgsType()
export class FindManyRestaurantArgs extends PartialType(
  FindManyRestaurantArgsStrict,
) {}

@ArgsType()
export class FindUniqueRestaurantArgs {
  where: RestaurantWhereUniqueInput
}