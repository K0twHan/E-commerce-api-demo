
import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
  } from '@nestjs/common';
  import { JwtService } from '@nestjs/jwt';
import { jwtSecret } from 'src/utils/constants';
  
  @Injectable()
  export class userGuard implements CanActivate {
    constructor(private jwtService: JwtService) {}
  
    async canActivate(context: ExecutionContext): Promise<boolean> {
      const request = context.switchToHttp().getRequest();
      
      const token = request.cookies['token']
      
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
        // 💡 We're assigning the payload to the request object here
        // so that we can access it in our route handlers
        request['user'] = payload;
        if(String(request.user.id) !== String(request.params.userId))
        {
          throw new UnauthorizedException()
        }
      } catch {
        throw new UnauthorizedException("Yetkisiz Erişim")
      }
      return true;
    }
  }
  @Injectable()
  export class createGuard implements CanActivate {
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

