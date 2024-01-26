import { OrderItemService } from './order-item.service';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';
export declare class OrderItemController {
    private readonly orderItemService;
    constructor(orderItemService: OrderItemService);
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
    findOne(id: string): Promise<{
        orderitem: {
            id: number;
            quantity: number;
            productId: number;
            orderId: number;
            created_at: Date;
        };
    }>;
    update(id: string, updateOrderItemDto: UpdateOrderItemDto): Promise<{
        new_orderitem: {
            id: number;
            quantity: number;
            productId: number;
            orderId: number;
            created_at: Date;
        };
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
