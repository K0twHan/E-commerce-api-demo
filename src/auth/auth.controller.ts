import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  @ApiBody({schema : {
    type : 'object',
    properties : {
      fullname : {
        type : 'string',
        example : 'Mehmet Demir'
      },
      username : {
        type : 'string',
        example : 'Memo'
      },
      email : {
        type : 'string',
        example : 'example@example.com'
      },
      password : {
        type : 'string',
        example: 'password234'
      },
      addres : {
        type : 'string',
        example :'London/England'
      }

    }
  }})
  signup(@Body() dto: AuthDto ){
    return this.authService.signup(dto)
  }

  @Post('signin')
  @ApiBody({schema : {
    type : 'object',
    properties : {
      email : {
        type : 'string',
        example : 'example@example.com'
      },
      password : {
        type : 'string',
        example: 'password234'
      }

    }
  }})
  signin(@Body() dto : AuthDto,@Req() req, @Res() res){
    return this.authService.signin(dto,req,res)
  }

  @Get('signout')
  signout(@Req() req, @Res() res){
    return this.authService.signout(req,res)
  }

 
}
