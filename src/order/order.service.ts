import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class OrderService {
  constructor(private prisma : PrismaService) {}
 async create(createOrderDto: CreateOrderDto) {
    const {status,totalPrice,userId} = createOrderDto;
    await this.prisma.order.create({data : {
      status,totalPrice,userId
    }})
    
    return {message : "Ürün başarıyla oluşturuldu"};
  }

  async findAll() {
    return this.prisma.order.findMany();
  }

  async findOne(id: number) {
    const order = await this.prisma.order.findUnique({where: {id}})
    return {order};
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    const old_order = await this.prisma.order.findUnique({where : {id}})
    if(!old_order)
    {
      throw new NotFoundException('Sipariş bulunamadı')
    }
    const new_order = await this.prisma.order.update({where : {id}, data: updateOrderDto})
    return {new_order};
  }

  async remove(id: number) {
    await this.prisma.order.delete({where : {id}})
    return {message : `${id} numaralı Sipariş başarıyla silindi`};
  }
}
