import { Controller, Get, Param, Delete,Body, Put,ParseUUIDPipe, NotFoundException, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreteOrderDTO } from './dtos/create-order.dto';

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
        if(!this.OrdersService.getById(id))
            throw new NotFoundException('order not found')
        return this.OrdersService.getById(id)

    }
    @Delete('/:id')
    delete(@Param('id') id:string){
        if(!this.OrdersService.getById(id))
            throw new NotFoundException('order not found')
        return this.OrdersService.deleteById(id)
    }
    @Post('/')
    crete(@Body() orderData: CreteOrderDTO){
        return this.OrdersService.create(orderData)
    }
    @Put('/:id')
    update(
        @Param('id')id: string,
        @Body() orderData: CreteOrderDTO
    )
    {
        if(!this.OrdersService.getById(id))
            throw new NotFoundException('order not found')
        this.OrdersService.updateById(id, orderData)
        return {success : true}
    }
}
