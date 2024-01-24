import { IsEmpty, IsNotEmpty, IsNumber } from "class-validator";

export class CreateOrderItemDto {

    @IsNotEmpty()
    @IsNumber()
    public quantity : number

    @IsNotEmpty()
    @IsNumber()
    public productId : number

    @IsNotEmpty()
    @IsNumber()
    public orderId : number

}
