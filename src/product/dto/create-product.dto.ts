import { Type } from "class-transformer";
import { IsNotEmpty,IsString,IsEmail,Length, isString, IsNumber, IsArray, ValidateNested } from "class-validator";


export class CreateProductDto {
    @IsNotEmpty()
    @IsString()
    public name : string

    @IsNotEmpty()
    @IsString()
    public description : string

    @IsNotEmpty()
    @IsNumber()
    public price : number

    @IsNotEmpty()
    @IsNumber()
    public stock : number


    @IsNotEmpty()
    @IsArray()
    @IsString({ each: true }) // Her bir kategori adının string olması gerektiğini belirtiyoruz
    public categories: string[];




}

