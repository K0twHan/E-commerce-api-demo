"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const auth_module_1 = require("./auth/auth.module");
const prisma_module_1 = require("../prisma/prisma.module");
const jwt_1 = require("@nestjs/jwt");
const users_module_1 = require("./users/users.module");
const product_module_1 = require("./product/product.module");
const order_module_1 = require("./order/order.module");
const order_item_module_1 = require("./order-item/order-item.module");
const category_module_1 = require("./category/category.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [auth_module_1.AuthModule, prisma_module_1.PrismaModule, jwt_1.JwtModule, users_module_1.UsersModule, product_module_1.ProductModule, order_module_1.OrderModule, order_item_module_1.OrderItemModule, category_module_1.CategoryModule],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map