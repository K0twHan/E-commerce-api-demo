import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';
import { PrismaService } from 'prisma/prisma.service';
export declare class OrderItemService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createOrderItemDto: CreateOrderItemDto): Promise<{
        message: string;
    }>;
    findAll(): Promise<{
        id: number;
        quantity: number;
        productId: number;
        orderId: number;
        created_at: Date;
    }[]>;
    findOne(id: number): Promise<{
        orderitem: {
            id: number;
            quantity: number;
            productId: number;
            orderId: number;
            created_at: Date;
        };
    }>;
    update(id: number, updateOrderItemDto: UpdateOrderItemDto): Promise<{
        new_orderitem: {
            id: number;
            quantity: number;
            productId: number;
            orderId: number;
            created_at: Date;
        };
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
