import { Controller, Get, Param, Delete, Post, Body } from '@nestjs/common';
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
    getById(@Param('id') id:string){
        return this.ProductsService.getById(id);
    }
    @Delete('/:id')
    deleteById(@Param('id') id:string){
        this.ProductsService.deleteById(id);
        return {success: true};
    }
    @Post('/')
    create(@Body() productData: CreateProductDTO){
        return this.ProductsService.create(productData)
    }
}




