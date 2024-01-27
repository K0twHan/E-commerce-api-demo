import { IsNotEmpty,IsString,IsEmail,Length, isString, IsNumber } from "class-validator";


export class CreateOrderDto {
    @IsNotEmpty()
    @IsString()
    public status : string

    @IsNotEmpty()
    @IsNumber()
    public totalPrice : number

    @IsNotEmpty()
    @IsNumber()
    public userId : number

    

}
