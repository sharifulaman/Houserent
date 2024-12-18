import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrderDto } from './orders.dto';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post('order')
  create(@Body() OrderDto: OrderDto) {
    return this.ordersService.createOrder(OrderDto);
  }

  @Get('orders')
  findAll() {
    return this.ordersService.findAllOrders();
  }
}
