"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const cookieParser = require("cookie-parser");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true }), new common_1.ValidationPipe({ transformOptions: {
            enableImplicitConversion: true
        } }));
    app.use(cookieParser());
    const config = new swagger_1.DocumentBuilder().setTitle('Swagger Test').setDescription('Swagger api test Desc').setVersion('1.0.0').build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('deneme', app, document);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map