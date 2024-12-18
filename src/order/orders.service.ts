import { Injectable } from '@nestjs/common';
import { OrderDto } from './orders.dto';

@Injectable()
export class OrdersService {
  private orders = [];

  createOrder(createOrderDto: OrderDto) {
    const newOrder = { id: this.orders.length + 1, ...createOrderDto };
    this.orders.push(newOrder);
    return newOrder;
  }

  findAllOrders() {
    return this.orders;
  }
}
