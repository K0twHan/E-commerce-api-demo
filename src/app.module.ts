import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { PrismaModule } from 'prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from './users/users.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { OrderItemModule } from './order-item/order-item.module';
import { CategoryModule } from './category/category.module';


@Module({
  imports: [AuthModule,PrismaModule,JwtModule, UsersModule, ProductModule, OrderModule, OrderItemModule, CategoryModule],

})
export class AppModule {}
