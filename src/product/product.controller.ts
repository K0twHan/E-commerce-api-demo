import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { ApiBody, ApiParam, ApiTags } from '@nestjs/swagger';
@ApiTags('Product')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiBody({schema : {
    type : 'object',
    properties : {
      name : {
        type : 'string',
        example : 'Jbl Bt-530'
    },
    description : {
      type : 'string',
      example : 'A bluetooth Headphone'
    },
    stock : {
      type : 'integer',
      example :"52"
    },
    price : {
      type : 'float',
      example : '345.25'
    },
    categories : {
      type : 'String[]',
      example : '["Electronic","Headphone"]'
    }
    }
  }})
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  @ApiParam({
    name : 'id',
    type : 'integer',
    description : 'id değeri giriniz',
    required : true
  })
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  @ApiBody({schema : {
    type : 'object',
    properties : {
      name : {
        type : 'string',
        example : 'Jbl Bt-520'
    },
    description : {
      type : 'string',
      example : 'A bluetooth Headphone'
    },
    stock : {
      type : 'integer',
      example :"52"
    },
    price : {
      type : 'float',
      example : '345.25'
    },
    categories : {
      type : 'String[]',
      example : '["Electronic","Headphone"]'
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
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @ApiParam({
    name : 'id',
    type : 'integer',
    description : 'id değeri giriniz',
    required : true
  })
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
