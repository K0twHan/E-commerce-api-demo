import { BadRequestException, ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { AuthDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt'
import {JwtService} from '@nestjs/jwt'
import {jwtSecret} from '../utils/constants'
import { Request, Response } from 'express';
import { throwError } from 'rxjs';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService, private jwt : JwtService) {}

    async signup(dto: AuthDto) {
        const {fullName,username,email , password , address} = dto;

        const foundUser = await this.prisma.user.findUnique({where : {email}})

        if(foundUser){
            throw new BadRequestException("Email already exist")
        }
        const hashedPassword = await this.hashPassword(password)

        await this.prisma.user.create({data : {
            email,
            hashedPassword,
            username,
            fullName,
            address
            
        }})

        return {message: "Kullanıcı kaydı başarıyla gerçekleşti"};
    }


    
    async signin(dto : AuthDto, req : Request, res : Response) {
        const {email,password} = dto
        const foundUser = await this.prisma.user.findUnique( {where: {email}})
        if(!foundUser)
        {
            throw new BadRequestException('Hatalı kimlik bilgisi');
        }

        const isMatch = await this.comparePassword({password,hash:foundUser.hashedPassword})
        if(!isMatch)
        {
            throw new BadRequestException('Hatalı kimlik bilgisi')
        }

        const token = await this.signToken({id : foundUser.id,email: foundUser.email})
        if(!token)
        {
            throw new ForbiddenException()
        }
        res.cookie('token',token)

        return res.send({message : 'Başarıyla giriş yapıldı'});
    }
    
    
    
    async signout(req : Request, res : Response) {
        res.clearCookie('token')
        return res.send({message : 'Başarıyla çıkış yapıldı'})
    }


    async hashPassword(password : string ) {
        const saltOrRounds = 10;
        const hashedPassword = await bcrypt.hash(password,saltOrRounds);
        return hashedPassword;
    }

    async comparePassword(args : {password:string,hash:string}) {
        return await bcrypt.compare(args.password,args.hash);
    }

    async signToken(args : {id:number,email: string}) {
        const payload = args

       return this.jwt.signAsync(payload,{secret: jwtSecret,expiresIn : '1h'},)
    }
}
