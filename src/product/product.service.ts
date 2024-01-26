import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'prisma/prisma.service';
import { PrismaClient } from '@prisma/client';


@Injectable()
export class ProductService {
  constructor(private prisma : PrismaService) {}
 async create(createProductDto: CreateProductDto) {
    
    const {name,description,stock,price,categories} = createProductDto;
    
    const foundProduct = await this.prisma.product.findMany({where : {name} })
    if(foundProduct.length !== 0)
    {
      throw new BadRequestException('Bu isimde ürün zaten mevcut')
    }
    await this.prisma.product.create({data : {
      name,
      description,
      price,
      stock,
      categories : {
        connectOrCreate: categories.map(category => ({
          where: { name: category },
          create: { name: category },
        })),
      }
      
         
      
    }})
    return {message : 'Ürün başarıyla eklendi'};
  }

  async findAll() {
    return this.prisma.product.findMany();
  }

  async findOne(id: number) {
    const product = await this.prisma.product.findUnique({where : {id}, select : {name :true,description :true,price:true,stock:true,categories: {select: { name: true },}}})
    return {product
    };
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const old_product = await this.prisma.product.findUnique({ where: { id } });
    
    if (!old_product) {
        throw new NotFoundException('Ürün bulunamadı');
    }

    const updated_product = await this.prisma.product.update({
        where: { id },
        data: {
            ...(updateProductDto.name && { name: updateProductDto.name }),
            ...(updateProductDto.description && { description: updateProductDto.description }),
            ...(updateProductDto.price && { price: updateProductDto.price }),
            ...(updateProductDto.stock && { stock: updateProductDto.stock }),
            ...(updateProductDto.categories && {
                categories: {
                    connectOrCreate: updateProductDto.categories.map(category => ({
                        where: { name: category },
                        create: { name: category },
                    })),
                },
            }),
        },
    });

    return { updated_product };
}

  async remove(id: number) {
    await this.prisma.product.delete({where : {id}})
    return {message :`${id} numaralı ürün başarıyla silindi`};
  }
}
