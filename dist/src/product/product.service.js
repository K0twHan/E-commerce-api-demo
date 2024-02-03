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
const prisma_service_1 = require("../../prisma/prisma.service");
let ProductService = class ProductService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createProductDto) {
        const { name, description, stock, price, categories } = createProductDto;
        const foundProduct = await this.prisma.product.findMany({ where: { name } });
        if (foundProduct.length !== 0) {
            throw new common_1.BadRequestException('Bu isimde ürün zaten mevcut');
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
        return { message: 'Ürün başarıyla eklendi' };
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
            throw new common_1.NotFoundException('Ürün bulunamadı');
        }
        const updated_product = await this.prisma.product.update({
            where: { id },
            data: {
                ...(updateProductDto.name && { name: updateProductDto.name }),
                ...(updateProductDto.description && { description: updateProductDto.description }),
                ...(updateProductDto.price && { price: updateProductDto.price }),
                ...(updateProductDto.stock && { stock: updateProductDto.stock }),
                ...(updateProductDto.categories && {
                    categories: {
                        connectOrCreate: updateProductDto.categories.map(category => ({
                            where: { name: category },
                            create: { name: category },
                        })),
                    },
                }),
            },
        });
        return { updated_product };
    }
    async remove(id) {
        const relatedOrderItem = await this.prisma.orderItem.findMany({ where: { orderId: id } });
        if (relatedOrderItem.length > 0) {
            for (const item of relatedOrderItem) {
                await this.prisma.orderItem.delete({ where: { id: item.id } });
            }
        }
        await this.prisma.product.deleteMany({ where: { id } });
        return { message: `${id} numaralı ürün başarıyla silindi` };
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductService);
//# sourceMappingURL=product.service.js.map