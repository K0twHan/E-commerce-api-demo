import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { JwtStrategy } from 'src/auth/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports : [JwtModule,PassportModule],
  controllers: [UsersController],
  providers: [UsersService,JwtStrategy],
})
export class UsersModule {}
