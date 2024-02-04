import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
  } from '@nestjs/common';
  import { JwtService } from '@nestjs/jwt';
import { jwtSecret } from 'src/utils/constants';
  
@Injectable()
export class createPatchGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean>{
    const request = await context.switchToHttp().getRequest();
    
    const token = await request.cookies['token']
    
    if (!token) {
      throw new UnauthorizedException("Lütfen Giriş Yapın");
    }
    try {
      
      const payload = await this.jwtService.verifyAsync(
        token,
        {
          secret: jwtSecret
        }
        );
        request['user'] = payload;
        
        
      }
      catch(error){
      
      console.log(error)
      throw new UnauthorizedException("Yetkisiz erişim")
    }
    if(String(request.user.id) !== String(request.body.userId))
    {
      throw new UnauthorizedException()
    }   
  return true;
}
}
