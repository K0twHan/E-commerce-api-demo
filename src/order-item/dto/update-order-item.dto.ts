import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderItemDto } from './create-order-item.dto';
import { IsEmpty, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class UpdateOrderItemDto extends PartialType(CreateOrderItemDto) {

    @IsOptional()
    @IsNotEmpty()
    @IsNumber()
    public quantity : number

    @IsOptional()
    @IsNotEmpty()
    @IsNumber()
    public productId : number

    @IsOptional()
    @IsNotEmpty()
    @IsNumber()
    public orderId : number


}
