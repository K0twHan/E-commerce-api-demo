import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    create(createCategoryDto: CreateCategoryDto): Promise<{
        message: string;
    }>;
    findAll(): Promise<{
        id: number;
        name: string;
        created_at: Date;
    }[]>;
    findOne(id: string): Promise<{
        category: {
            id: number;
            name: string;
            created_at: Date;
        };
    }>;
    update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<string>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
