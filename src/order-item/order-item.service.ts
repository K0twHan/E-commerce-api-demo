import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class OrderItemService {
  constructor(private prisma : PrismaService) {}
  async create(createOrderItemDto: CreateOrderItemDto) {
  
    const {quantity,productId,orderId} = createOrderItemDto;
  const alreadyexistorder = this.prisma.order.findUnique({where : {id : productId}})
  if(!alreadyexistorder)
  {
    throw new HttpException('Var olmayan bir ürünü eklemeye çalışıyorsunuz',HttpStatus.BAD_REQUEST)
  }
    await this.prisma.orderItem.create({data : {
      quantity,productId,orderId
    }})
    return {message : 'sipariş nesnesi başarıyla oluşturuldu'};
    
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
      throw new NotFoundException('Sipariş nesnesi bulunamadı')
    }
    const new_orderitem = await this.prisma.orderItem.update({where : {id}, data: updateOrderItemDto})
    return {new_orderitem};
  }

  async remove(id: number) {
    await this.prisma.orderItem.deleteMany({where : {id}})
    return {message : `${id} numaralı Sipariş nesnesi başarıyla silindi`};
  }
}
