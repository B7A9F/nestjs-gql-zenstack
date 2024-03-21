import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { EnhancedPrismaService } from './enhancedPrisma.service';
import { ClsModule } from 'nestjs-cls';

@Global()
@Module({
  imports: [ClsModule],
  providers: [PrismaService, EnhancedPrismaService],
  exports: [PrismaService, EnhancedPrismaService],
})
export class PrismaModule {}
