import { Injectable } from '@nestjs/common';
import { Order, db } from 'src/db';
import {v4 as uuidv4} from 'uuid'

@Injectable()
export class OrdersService {
    public getAll(): Order[]{
        return db.orders
    }
    public getById(id: Order['id']): Order | null{
        return db.orders.find((p)=> p.id == id)
    }
    public deleteById(id:Order['id']): any{
        return db.orders.filter((p)=> p.id !=id)
    }
    public create(orderData: Omit<Order, 'id'>): Order {
        const newOrder = {...orderData,id: uuidv4() };
        db.orders.push(newOrder)
        return newOrder
    }
    public updateById(id: Order['id'],orderData: Omit<Order, 'id'>): void{
        db.orders = db.orders.map(
            (e)=>{if(e.id ===id){
                return{...e,...orderData}
            }
            return e
        })
        
    }
}
