import { Controller, Get, Param, Delete, Post, Body, ParseUUIDPipe, Put, NotFoundException } from '@nestjs/common';
import { ProductsService } from './products.service';
import {Product} from '../db'
import {CreateProductDTO} from './dtos/create-product.dto'

@Controller('products')
export class ProductsController {
   constructor(private ProductsService: ProductsService){
    this.ProductsService = ProductsService
   } 
    @Get('/')
    getAll(): any {
        return this.ProductsService.getAll();
    }

    @Get('/:id')
    getById(@Param('id', new ParseUUIDPipe) id:string){
        if(!this.ProductsService.getById(id))
            throw new NotFoundException('Product not found')  
            
        return this.ProductsService.getById(id);
    }

    @Delete('/:id')
    deleteById(@Param('id',new ParseUUIDPipe) id:string){
        if(!this.ProductsService.getById(id))
            throw new NotFoundException('Product not found')  

        this.ProductsService.deleteById(id);
        return {success: true};
    }

    @Post('/')
    create(@Body() productData: CreateProductDTO){
        return this.ProductsService.create(productData)
    }

    @Put('/:id')
    update(
        @Param('id', new ParseUUIDPipe()  )id: string,
        @Body() productData: CreateProductDTO)
        {
        if(!this.ProductsService.getById(id))
            throw new NotFoundException('Product not found')  

        this.ProductsService.updateById(id,productData)
        return {success : true}
    }
}




