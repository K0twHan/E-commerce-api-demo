import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private prisma : PrismaService) {}
 async create(createCategoryDto: CreateCategoryDto) {
    const {name} = createCategoryDto;
    await this.prisma.category.create({data : {name}})
    
    return {message : `${name} adlı kategori oluşturuldu`};
  }

  async findAll() {
    return this.prisma.category.findMany();
  }

  async findOne(id: number) {
    const category = await this.prisma.category.findUnique({where: {id}})
    return {category};
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const old_category = await this.prisma.category.findUnique({where : {id}})
    if(!old_category)
    {
      throw new NotFoundException('Ürün bulunamadı')
    }
    const new_category = await this.prisma.category.update({where : {id}, data: updateCategoryDto,})
    return `${old_category.name} updated to ${new_category.name}`
  }

  async remove(id: number) {
    await this.prisma.category.delete({where : {id}})
    return {message : `${id} numaralı Categori başarıyla silindi`};
  }
}
