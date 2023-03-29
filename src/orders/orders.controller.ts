import { Controller, Get, Param, Delete } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
    constructor(private OrdersService: OrdersService ){
        this.OrdersService = OrdersService
    }
    @Get('/')
    getAll(): any{
        return this.OrdersService.getAll()
    }

    @Get('/:id')
    getById(@Param('id') id: string){
        return this.OrdersService.getById(id)

    }
    @Delete('/:id')
    delete(@Param('id') id:string){
        return this.OrdersService.deleteById(id)
    }
}
