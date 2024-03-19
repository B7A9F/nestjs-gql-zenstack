import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { MenusModule } from './models/menus/menus.module';
import { RestaurantsModule } from './models/restaurants/restaurants.module';
import { CategoriesModule } from './models/categories/categories.module';
import { ProductsModule } from './models/products/products.module';
import { PrismaModule } from './common/prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot(),

    GraphQLModule.forRoot<ApolloDriverConfig>({
      // Configuring the GraphQL module using the Apollo driver with a specific configuration type
      driver: ApolloDriver, // Specifying the Apollo driver to be used for GraphQL
      fieldResolverEnhancers: ['guards'], // Applying guards as field resolver enhancers, providing additional control and security
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'), // Automatically generating the schema file from types and resolvers, saving it in the specified path
      introspection: true, // Enabling introspection, allowing tools like GraphQL Playground to fetch the schema
    }),
    PrismaModule,
    RestaurantsModule,
    MenusModule,
    CategoriesModule,
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
