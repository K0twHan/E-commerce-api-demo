import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'prisma/prisma.service';
export declare class OrderService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createOrderDto: CreateOrderDto): Promise<{
        message: string;
    }>;
    findAll(): Promise<{
        id: number;
        createdAt: Date;
        status: string;
        totalPrice: number;
        userId: number;
        updated_at: Date;
    }[]>;
    findOne(id: number): Promise<{
        order: {
            id: number;
            createdAt: Date;
            status: string;
            totalPrice: number;
            userId: number;
            updated_at: Date;
        };
    }>;
    update(id: number, updateOrderDto: UpdateOrderDto): Promise<{
        message: string;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}