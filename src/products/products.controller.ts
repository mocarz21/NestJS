import { Controller, Get, Param, Delete, Post, Body, ParseUUIDPipe, Put, NotFoundException } from '@nestjs/common';
import { ProductsService } from './products.service';
import {CreateProductDTO} from './dtos/create-product.dto'

@Controller('products')
export class ProductsController {
   constructor(private ProductsService: ProductsService){
    this.ProductsService = ProductsService
   } 
    @Get('/')
    async getAll() {
        return this.ProductsService.getAll();
    }

    @Get('/:id')
    async getById(@Param('id', new ParseUUIDPipe) id:string){
        const prod = await this.ProductsService.getById(id)
        if(!prod)
            throw new NotFoundException('Product not found')  
            
        return prod;
    }

    @Delete('/:id')
    async deleteById(@Param('id',new ParseUUIDPipe) id:string){
        if(! (await this.ProductsService.getById(id)))
            throw new NotFoundException('Product not found')  

        await this.ProductsService.deleteById(id);
        return {success: true};
    }

    @Post('/')
    create(@Body() productData: CreateProductDTO){
        return this.ProductsService.create(productData)
    }

    @Put('/:id')
    async update(
        @Param('id', new ParseUUIDPipe()  )id: string,
        @Body() productData: CreateProductDTO)
        {
        if(!(await this.ProductsService.getById(id)))
            throw new NotFoundException('Product not found')  

        await this.ProductsService.updateById(id,productData)
        return {success : true}
    }
}




