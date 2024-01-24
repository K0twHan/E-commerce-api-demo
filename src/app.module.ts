import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { PrismaModule } from 'prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from './users/users.module';
import { ProductModule } from './product/product.module';


@Module({
  imports: [AuthModule,PrismaModule,JwtModule, UsersModule, ProductModule],

})
export class AppModule {}
