import { Injectable } from '@nestjs/common';
import {
  FindManyRestaurantArgs,
  FindUniqueRestaurantArgs,
} from './dtos/find.args';
import { EnhancedPrismaService as PrismaService } from 'src/common/prisma/enhancedPrisma.service';
import { CreateRestaurantInput } from './dtos/create-restaurant.input';
import { UpdateRestaurantInput } from './dtos/update-restaurant.input';

@Injectable()
export class RestaurantsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createRestaurantInput: CreateRestaurantInput) {
    return this.prisma.restaurant.create({
      data: createRestaurantInput,
    });
  }

  findAll(args: FindManyRestaurantArgs) {
    return this.prisma.restaurant.findMany(args);
  }

  findOne(args: FindUniqueRestaurantArgs) {
    return this.prisma.restaurant.findUnique(args);
  }

  update(updateRestaurantInput: UpdateRestaurantInput) {
    const { id, ...data } = updateRestaurantInput;
    return this.prisma.restaurant.update({
      where: { id },
      data: data,
    });
  }

  remove(args: FindUniqueRestaurantArgs) {
    return this.prisma.restaurant.delete(args);
  }
}
