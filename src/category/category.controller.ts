import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { JwtAuthGuard } from 'src/auth/jtw.guard';
import { ApiBody, ApiParam, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
@ApiTags('Category')
@UseGuards(JwtAuthGuard)
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}
  
  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiBody({schema : {
    type : 'object',
    properties : {
      name : {
        type : 'string',
        example : 'Electronic'
      }
    }
  }})
  create(@Body() createCategoryDto: CreateCategoryDto) {
    
    return this.categoryService.create(createCategoryDto);
  }

  @Get()
  findAll() {
    return this.categoryService.findAll();
  }

  @Get(':id')
  @ApiParam({
    name : 'id',
    type : 'integer',
    description : 'id değeri giriniz',
    required : true
  })
  findOne(@Param('id') id: string) {
    return this.categoryService.findOne(+id);
  }
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  @ApiBody({schema : {
    type : 'object',
    properties : {
      name : {
        type : 'string',
        example : 'Electronic',
        description : "Yeni değeri giriniz"
        
      }
    }
  }
  })

  @ApiParam({
    name : 'id',
    type : 'integer',
    description : 'id değeri giriniz',
    required : true
  })
  update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    return this.categoryService.update(+id, updateCategoryDto);
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
    return this.categoryService.remove(+id);
  }
}
