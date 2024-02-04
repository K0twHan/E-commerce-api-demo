import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getMyUser(params: {
        userId: string;
    }, req: any): Promise<{
        user: {
            id: number;
            username: string;
            email: string;
            fullName: string;
            address: string;
        };
    }>;
    getUsers(): Promise<{
        id: number;
        username: string;
        email: string;
        fullName: string;
        address: string;
    }[]>;
}
