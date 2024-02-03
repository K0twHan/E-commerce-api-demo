import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [JwtModule,PassportModule],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
