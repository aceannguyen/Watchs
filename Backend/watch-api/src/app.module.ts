import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';
import { AdminModule } from './admin/admin.module';
import { CartModule } from './cart/cart.module';
import { BlogModule } from './blog/blog.module';
import { CustomerModule } from './customer/customer.module';

// mongodb://localhost:27017/watch

@Module({
  imports: [
  MongooseModule.forRootAsync({
    useFactory: () => ({
      uri: 'mongodb://127.0.0.1:27017/watch',
    }),
  }),
  ProductModule,
  AdminModule,
  CartModule,
  BlogModule,
  CustomerModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


// mongodb://localhost:27017