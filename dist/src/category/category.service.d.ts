import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'prisma/prisma.service';
export declare class CategoryService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createCategoryDto: CreateCategoryDto): Promise<{
        message: string;
    }>;
    findAll(): Promise<{
        id: number;
        name: string;
        created_at: Date;
    }[]>;
    findOne(id: number): Promise<{
        category: {
            id: number;
            name: string;
            created_at: Date;
        };
    }>;
    update(id: number, updateCategoryDto: UpdateCategoryDto): Promise<string>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
