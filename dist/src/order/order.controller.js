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
exports.OrderController = void 0;
const common_1 = require("@nestjs/common");
const order_service_1 = require("./order.service");
const create_order_dto_1 = require("./dto/create-order.dto");
const update_order_dto_1 = require("./dto/update-order.dto");
const jtw_guard_1 = require("../auth/jtw.guard");
const swagger_1 = require("@nestjs/swagger");
const deneme_1 = require("../auth/deneme");
let OrderController = class OrderController {
    constructor(orderService) {
        this.orderService = orderService;
    }
    create(createOrderDto) {
        return this.orderService.create(createOrderDto);
    }
    findAll() {
        return this.orderService.findAll();
    }
    findOne(id, req) {
        return this.orderService.findOne(+id, req);
    }
    update(id, updateOrderDto) {
        return this.orderService.update(+id, updateOrderDto);
    }
    remove(id) {
        return this.orderService.remove(+id);
    }
};
exports.OrderController = OrderController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiBody)({ schema: {
            type: 'object',
            properties: {
                status: {
                    type: 'string',
                    example: 'preparing'
                },
                totalPrice: {
                    type: 'float',
                    example: '266.76'
                },
                userId: {
                    type: 'int',
                    example: '3'
                }
            }
        } }),
    (0, common_1.UseGuards)(deneme_1.createGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_order_dto_1.CreateOrderDto]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(jtw_guard_1.JwtAuthGuard),
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'integer',
        description: 'id değeri giriniz',
        required: true
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiBody)({ schema: {
            type: "object",
            properties: {
                status: {
                    type: 'string',
                    example: 'preparing'
                },
                totalPrice: {
                    type: 'float',
                    example: '266.76'
                },
                userId: {
                    type: 'int',
                    example: '3'
                }
            },
            description: "Değiştirmek istediğiniz değerleri düzenleyiniz"
        } }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'integer',
        description: 'id değeri giriniz',
        required: true
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_order_dto_1.UpdateOrderDto]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'integer',
        description: 'id değeri giriniz',
        required: true
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "remove", null);
exports.OrderController = OrderController = __decorate([
    (0, swagger_1.ApiTags)('Order'),
    (0, common_1.UseGuards)(jtw_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('order'),
    __metadata("design:paramtypes", [order_service_1.OrderService])
], OrderController);
//# sourceMappingURL=order.controller.js.map