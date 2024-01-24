import { Controller, Get, Param, Req, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from 'src/auth/jtw.guard';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

@UseGuards(JwtAuthGuard)
@Get(':userId')
getMyUser(@Param() params: {userId : string},@Req() req ) {
  return this.usersService.getMyUser(params.userId,req);
}

@Get()
getUsers()
{
 return  this.usersService.getUsers()
}




}
