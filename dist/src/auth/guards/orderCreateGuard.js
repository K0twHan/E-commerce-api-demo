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
exports.createPatchGuard = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const constants_1 = require("../../utils/constants");
let createPatchGuard = class createPatchGuard {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    async canActivate(context) {
        const request = await context.switchToHttp().getRequest();
        const token = await request.cookies['token'];
        if (!token) {
            throw new common_1.UnauthorizedException("Lütfen Giriş Yapın");
        }
        try {
            const payload = await this.jwtService.verifyAsync(token, {
                secret: constants_1.jwtSecret
            });
            request['user'] = payload;
        }
        catch (error) {
            console.log(error);
            throw new common_1.UnauthorizedException("Yetkisiz erişim");
        }
        if (String(request.user.id) !== String(request.body.userId)) {
            throw new common_1.UnauthorizedException();
        }
        return true;
    }
};
exports.createPatchGuard = createPatchGuard;
exports.createPatchGuard = createPatchGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], createPatchGuard);
//# sourceMappingURL=orderCreateGuard.js.map