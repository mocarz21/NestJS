import { Controller, Get, Param, Delete,Body, Put,ParseUUIDPipe, NotFoundException, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreteOrderDTO } from './dtos/create-order.dto';

@Controller('orders')
export class OrdersController {
    constructor(private OrdersService: OrdersService ){
        this.OrdersService = OrdersService
    }
    @Get('/')
    async getAll() {
        return this.OrdersService.getAll()
    }

    @Get('/:id')
    async getById(@Param('id') id: string){
        if(!(await this.OrdersService.getById(id)))
            throw new NotFoundException('order not found')
        return this.OrdersService.getById(id)

    }
    @Delete('/:id')
    async delete(@Param('id') id:string){
        if(!(await this.OrdersService.getById(id)))
            throw new NotFoundException('order not found')
        
        await this.OrdersService.deleteById(id)
        return {success: true};
    }
    @Post('/')
    crete(@Body() orderData: CreteOrderDTO){
        return this.OrdersService.create(orderData)
    }
    @Put('/:id')
    async update(
        @Param('id')id: string,
        @Body() orderData: CreteOrderDTO
    )
    {
        if(!(await this.OrdersService.getById(id)))
            throw new NotFoundException('order not found')
        await this.OrdersService.updateById(id, orderData)
        return {success : true}
    }
}
