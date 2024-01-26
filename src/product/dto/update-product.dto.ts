import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { IsNotEmpty,IsString,IsEmail,Length, isString, IsNumber, IsOptional, IsArray, ValidateNested } from "class-validator";
import { Type } from 'class-transformer';




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

    @IsOptional()
    @IsNotEmpty()
    @IsArray()
    @Type(() => String) // Dizideki her öğenin tipini belirt
    public categories: string[];
}
