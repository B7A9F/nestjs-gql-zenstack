import { Injectable } from '@nestjs/common';
import type { PrismaClient } from '@prisma/client';
import { enhance } from '@zenstackhq/runtime';
import { ClsService } from 'nestjs-cls';
import { PrismaService } from './prisma.service';

@Injectable()
export class EnhancedPrismaService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly clsService: ClsService,
  ) {}

  private get enhancedPrisma() {
    console.log(this.clsService.get('user'));
    return enhance(this.prismaService, {
      user: this.clsService.get('user') || null,
    });
  }

  get restaurant(): PrismaClient['restaurant'] {
    return this.enhancedPrisma.restaurant;
  }
  get menu(): PrismaClient['menu'] {
    return this.enhancedPrisma.menu;
  }
  get category(): PrismaClient['category'] {
    return this.enhancedPrisma.category;
  }
  get product(): PrismaClient['product'] {
    return this.enhancedPrisma.product;
  }
}
