import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'prisma/prisma.service';
export declare class ProductService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createProductDto: CreateProductDto): Promise<{
        message: string;
    }>;
    findAll(): Promise<{
        id: number;
        name: string;
        description: string;
        price: number;
        stock: number;
        image: string;
        created_at: Date;
    }[]>;
    findOne(id: number): Promise<{
        product: {
            description: string;
            name: string;
            price: number;
            stock: number;
            categories: {
                name: string;
            }[];
        };
    }>;
    update(id: number, updateProductDto: UpdateProductDto): Promise<{
        updated_product: {
            id: number;
            name: string;
            description: string;
            price: number;
            stock: number;
            image: string;
            created_at: Date;
        };
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
