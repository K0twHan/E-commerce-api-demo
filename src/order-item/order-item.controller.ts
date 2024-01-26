import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { OrderItemService } from './order-item.service';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';
import { JwtAuthGuard } from 'src/auth/jtw.guard';
import { ApiBody, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('OrderItem')
@Controller('orderitem')
export class OrderItemController {
  constructor(private readonly orderItemService: OrderItemService) {}
  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiBody({schema : {
    type : 'object',
    properties : {
      quantity : {
        type : 'int',
        example : '5'
      },
      productId : {
        type : 'int',
        example : '7'
      },
      orderId : {
        type : 'int',
        example : '4'
      }

    }
  }})
  create(@Body() createOrderItemDto: CreateOrderItemDto) {
    return this.orderItemService.create(createOrderItemDto);
  }
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.orderItemService.findAll();
  }
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @ApiParam({
    name : 'id',
    type : 'integer',
    description : 'enter unique id',
    required : true
  })
  findOne(@Param('id') id: string) {
    return this.orderItemService.findOne(+id);
  }
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  @ApiParam({
    name : 'id',
    type : 'integer',
    description : 'enter unique id',
    required : true
  })
  update(@Param('id') id: string, @Body() updateOrderItemDto: UpdateOrderItemDto) {
    return this.orderItemService.update(+id, updateOrderItemDto);
  }
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @ApiParam({
    name : 'id',
    type : 'integer',
    description : 'enter unique id',
    required : true
  })
  remove(@Param('id') id: string) {
    return this.orderItemService.remove(+id);
  }
}
