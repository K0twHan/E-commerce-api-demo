import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { JwtAuthGuard } from 'src/auth/jtw.guard';
import { ApiBody, ApiParam, ApiTags } from '@nestjs/swagger';
import { createGuard } from 'src/auth/deneme';
@ApiTags('Order')
@UseGuards(JwtAuthGuard)
@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  @ApiBody({schema : {
    type : 'object',
    properties : {
      status : {
        type : 'string',
        example : 'preparing'
      },
      totalPrice : {
        type : 'float',
        example : '266.76'
      },
      userId : {
        type : 'int',
        example : '3'
      }
    }
  }})
  @UseGuards(createGuard)
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.create(createOrderDto);
  }
  @Get()
  findAll() {
    return this.orderService.findAll();
  }
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @ApiParam({
    name : 'id',
    type : 'integer',
    description : 'id değeri giriniz',
    required : true
  })
  findOne(@Param('id') id: string,@Req() req) {
    return this.orderService.findOne(+id,req);
  }
 // @UseGuards(pdGuard)
  @Patch(':id')
  @ApiBody({schema: {
    type : "object",
    properties : {
      status : {
        type : 'string',
        example : 'preparing'
      },
      totalPrice : {
        type : 'float',
        example : '266.76'
      },
      userId : {
        type : 'int',
        example : '3'
      }
    },
    description : "Değiştirmek istediğiniz değerleri düzenleyiniz"

  }})
  @ApiParam({
    name : 'id',
    type : 'integer',
    description : 'id değeri giriniz',
    required : true
  })
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.orderService.update(+id, updateOrderDto);
  }
 // @UseGuards(pdGuard)
  @Delete(':id')
  
  @ApiParam({
    name : 'id',
    type : 'integer',
    description : 'id değeri giriniz',
    required : true
  })
  remove(@Param('id') id: string) {
    return this.orderService.remove(+id);
  }
}
