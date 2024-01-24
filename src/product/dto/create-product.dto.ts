import { IsNotEmpty,IsString,IsEmail,Length, isString, IsNumber } from "class-validator";


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
}
