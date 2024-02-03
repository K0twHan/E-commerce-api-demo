import { Request } from 'express';
import { PrismaService } from 'prisma/prisma.service';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    getMyUser(userId: string, req: Request): Promise<{
        user: {
            email: string;
            username: string;
            fullName: string;
            address: string;
            id: number;
        };
    }>;
    getUsers(): Promise<{
        email: string;
        username: string;
        fullName: string;
        address: string;
        id: number;
    }[]>;
}
