import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { Request } from 'express';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UsersService {
    constructor(private prisma : PrismaService) {}



    async getMyUser(userId: string,req: Request) {
      
        const id = parseInt(userId, 10);

      const user = await this.prisma.user.findUnique({where : {id},select: {fullName : true,username : true,address : true,email : true}})
        if(!user)
        {
            throw new NotFoundException()
        }
         const decodedUser = req.user as {id:number , email: string}
      
        if(user.email !== decodedUser.email)
        {
            throw new ForbiddenException()
        }
         return { user };
    }

    async getUsers() {
        return this.prisma.user.findMany({select : {fullName : true,username : true,address : true,email : true}})
    }
   
}
