import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { IsNotEmpty,IsString,IsEmail,Length, isString, IsNumber, IsOptional } from "class-validator";


export class UpdateProductDto extends PartialType(CreateProductDto) {
    @IsOptional()
    @IsString()
    public name?: string;

    @IsOptional()
    @IsString()
    public description?: string;

    @IsOptional()
    @IsNumber()
    public price?: number;

    @IsOptional()
    @IsNumber()
    public stock?: number;
}
