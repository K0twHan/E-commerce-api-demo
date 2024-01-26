import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
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
    findOne(id: string): Promise<{
        order: {
            id: number;
            createdAt: Date;
            status: string;
            totalPrice: number;
            userId: number;
            updated_at: Date;
        };
    }>;
    update(id: string, updateOrderDto: UpdateOrderDto): Promise<{
        message: string;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
