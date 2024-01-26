"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const update_product_dto_1 = require("./dto/update-product.dto");
const prisma_service_1 = require("../../prisma/prisma.service");
let ProductService = class ProductService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createProductDto) {
        const { name, description, stock, price, categories } = createProductDto;
        const foundProduct = await this.prisma.product.findMany({ where: { name } });
        if (foundProduct.length !== 0) {
            throw new common_1.BadRequestException('Name already exist');
        }
        await this.prisma.product.create({ data: {
                name,
                description,
                price,
                stock,
                categories: {
                    connectOrCreate: categories.map(category => ({
                        where: { name: category },
                        create: { name: category },
                    })),
                }
            } });
        return { message: 'Product created succesfully' };
    }
    async findAll() {
        return this.prisma.product.findMany();
    }
    async findOne(id) {
        const product = await this.prisma.product.findUnique({ where: { id }, select: { name: true, description: true, price: true, stock: true, categories: { select: { name: true }, } } });
        return { product
        };
    }
    async update(id, updateProductDto) {
        const old_product = await this.prisma.product.findUnique({ where: { id } });
        if (!old_product) {
            throw new common_1.NotFoundException('Product was not found');
        }
        const updated_product = await this.prisma.product.update({ where: { id }, data: update_product_dto_1.UpdateProductDto });
        return { updated_product };
    }
    async remove(id) {
        await this.prisma.product.delete({ where: { id } });
        return { message: `Product deleted succesfully` };
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductService);
//# sourceMappingURL=product.service.js.map