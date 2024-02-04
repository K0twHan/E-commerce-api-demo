import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
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
    findOne(id: string): Promise<{
        product: {
            name: string;
            description: string;
            stock: number;
            price: number;
            categories: {
                name: string;
            }[];
        };
    }>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<{
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
    remove(id: string): Promise<{
        message: string;
    }>;
}
