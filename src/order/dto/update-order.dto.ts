import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderDto } from './create-order.dto';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    public status : string

    @IsOptional()
    @IsNotEmpty()
    @IsNumber()
    public totalPrice : number

    @IsOptional()
    @IsNotEmpty()
    @IsNumber()
    public userId : number

    
}
