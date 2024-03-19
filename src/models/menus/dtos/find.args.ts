import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { MenuOrderByWithRelationInput } from './order-by.args'
import { MenuWhereInput, MenuWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.MenuScalarFieldEnum, {
  name: 'MenuScalarFieldEnum',
})

@ArgsType()
class FindManyMenuArgsStrict
  implements RestrictProperties<FindManyMenuArgsStrict, Omit<Prisma.MenuFindManyArgs, 'include' | 'select'>>
{
  where: MenuWhereInput
  orderBy: MenuOrderByWithRelationInput[]
  cursor: MenuWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.MenuScalarFieldEnum])
  distinct: Prisma.MenuScalarFieldEnum[]
}

@ArgsType()
export class FindManyMenuArgs extends PartialType(
  FindManyMenuArgsStrict,
) {}

@ArgsType()
export class FindUniqueMenuArgs {
  where: MenuWhereUniqueInput
}