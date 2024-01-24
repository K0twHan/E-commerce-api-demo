import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class OrderItemService {
  constructor(private prisma : PrismaService) {}
  async create(createOrderItemDto: CreateOrderItemDto) {
    const {quantity,productId,orderId} = createOrderItemDto;
    await this.prisma.orderItem.create({data : {
      quantity,productId,orderId
    }})
    return {message : 'This action adds a new orderItem'};
    
  }

  async findAll() {
    return this.prisma.orderItem.findMany();
  }

  async findOne(id: number) {
    const orderitem = await this.prisma.orderItem.findUnique({where: {id}})
    return {orderitem};
  }

  async update(id: number, updateOrderItemDto: UpdateOrderItemDto) {
    const old_orderitem = await this.prisma.orderItem.findUnique({where : {id}})
    if(!old_orderitem)
    {
      throw new NotFoundException('Product was not found')
    }
    const new_orderitem = await this.prisma.orderItem.update({where : {id}, data: updateOrderItemDto})
    return {new_orderitem};
  }

  async remove(id: number) {
    await this.prisma.order.delete({where : {id}})
    return {message : 'Order deleted succesfully'};
  }
}
