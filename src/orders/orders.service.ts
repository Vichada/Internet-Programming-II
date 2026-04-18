import { Injectable } from '@nestjs/common';
import { NotificationsService } from 'src/notifications/notifications.service';
import { CreateOrderInput } from '../graphql/inputs/create-order.input';
import { OrderType } from '../graphql/types/order.type';

@Injectable()
export class OrdersService {
  private orders: OrderType[] = [];

  constructor(
    private readonly notifications: NotificationsService,
  ) {}

  createOrder(orderDto: CreateOrderInput) {
    const order: OrderType = {
      id: Date.now().toString(),
      product: orderDto.product,
      quantity: orderDto.quantity,
    };

    this.orders.push(order);

    this.notifications.notify('order_created', {
      order,
    });

    return order;
  }

  findAll() {
    return this.orders;
  }
}