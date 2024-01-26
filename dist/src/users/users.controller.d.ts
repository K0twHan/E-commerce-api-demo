import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getMyUser(params: {
        userId: string;
    }, req: any): Promise<{
        user: {
            email: string;
            username: string;
            fullName: string;
            address: string;
        };
    }>;
    getUsers(): Promise<{
        email: string;
        username: string;
        fullName: string;
        address: string;
    }[]>;
}
