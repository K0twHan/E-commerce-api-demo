import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'prisma/prisma.service';
import { NotFoundError } from 'rxjs';

@Injectable()
export class ProductService {
  constructor(private prisma : PrismaService) {}
 async create(createProductDto: CreateProductDto) {
    const {name,description,stock,price} = createProductDto;
    const foundProduct = await this.prisma.product.findMany({where : {name} })
    if(foundProduct.length !== 0)
    {
      throw new BadRequestException('Name already exist')
    }
    await this.prisma.product.create({data : {
      name,
      description,
      price,
      stock
    }})
    return {message : 'Product created succesfully'};
  }

  async findAll() {
    return this.prisma.product.findMany();
  }

  async findOne(id: number) {
    const product = await this.prisma.product.findUnique({where : {id}, select : {name :true,description :true,price:true,stock:true}})
    return { product
    };
  }

  async  update(id: number, updateProductDto: UpdateProductDto) {
    const old_product = await this.prisma.product.findUnique({where : { id}})
    if(!old_product)
    {
      throw new NotFoundException('Product was not found')
    }
    const updated_product = await this.prisma.product.update({where : {id}, data : updateProductDto})
    return {message : `Product updated succesfully`};
  }
  
  async remove(id: number) {
    await this.prisma.product.delete({where : {id}})
    return {message :`Product deleted succesfully`};
  }
}
