import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports : [JwtModule,PassportModule],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
