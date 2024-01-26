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
exports.OrderItemService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let OrderItemService = class OrderItemService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createOrderItemDto) {
        const { quantity, productId, orderId } = createOrderItemDto;
        await this.prisma.orderItem.create({ data: {
                quantity, productId, orderId
            } });
        return { message: 'This action adds a new orderItem' };
    }
    async findAll() {
        return this.prisma.orderItem.findMany();
    }
    async findOne(id) {
        const orderitem = await this.prisma.orderItem.findUnique({ where: { id } });
        return { orderitem };
    }
    async update(id, updateOrderItemDto) {
        const old_orderitem = await this.prisma.orderItem.findUnique({ where: { id } });
        if (!old_orderitem) {
            throw new common_1.NotFoundException('Product was not found');
        }
        const new_orderitem = await this.prisma.orderItem.update({ where: { id }, data: updateOrderItemDto });
        return { new_orderitem };
    }
    async remove(id) {
        await this.prisma.order.delete({ where: { id } });
        return { message: 'Order deleted succesfully' };
    }
};
exports.OrderItemService = OrderItemService;
exports.OrderItemService = OrderItemService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OrderItemService);
//# sourceMappingURL=order-item.service.js.map