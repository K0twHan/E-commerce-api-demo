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
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let OrderService = class OrderService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createOrderDto) {
        const { status, totalPrice, userId } = createOrderDto;
        await this.prisma.order.create({ data: {
                status, totalPrice, userId
            } });
        return { message: 'This action adds a new order' };
    }
    async findAll() {
        return this.prisma.order.findMany();
    }
    async findOne(id) {
        const order = await this.prisma.order.findUnique({ where: { id } });
        return { order };
    }
    async update(id, updateOrderDto) {
        const old_order = await this.prisma.order.findUnique({ where: { id } });
        if (!old_order) {
            throw new common_1.NotFoundException('Product was not found');
        }
        const new_order = await this.prisma.order.update({ where: { id }, data: updateOrderDto });
        return { message: 'Order updated succesfully' };
    }
    async remove(id) {
        await this.prisma.order.delete({ where: { id } });
        return { message: 'Order deleted succesfully' };
    }
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OrderService);
//# sourceMappingURL=order.service.js.map