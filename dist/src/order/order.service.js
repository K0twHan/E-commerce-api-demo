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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
        return { message: "Ürün başarıyla oluşturuldu" };
    }
    async findAll() {
        return this.prisma.order.findMany();
    }
    async findOne(id, req) {
        const order = await this.prisma.order.findUnique({ where: { id } });
        if (req.user.id !== order.userId) {
            throw new common_1.UnauthorizedException("Lütfen sizinle alakalı siparişleri arayın");
        }
        return { order };
    }
    async update(id, updateOrderDto) {
        const old_order = await this.prisma.order.findUnique({ where: { id } });
        if (!old_order) {
            throw new common_1.NotFoundException('Sipariş bulunamadı');
        }
        const new_order = await this.prisma.order.update({ where: { id }, data: updateOrderDto });
        return { new_order };
    }
    async remove(id) {
        await this.prisma.order.delete({ where: { id } });
        return { message: `${id} numaralı Sipariş başarıyla silindi` };
    }
};
exports.OrderService = OrderService;
__decorate([
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], OrderService.prototype, "findOne", null);
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OrderService);
//# sourceMappingURL=order.service.js.map