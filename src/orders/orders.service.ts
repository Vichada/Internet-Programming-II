import { Injectable } from '@nestjs/common';
import { NotificationsService } from 'src/notifications/notifications.service';

type Order = {
  id: string;
  product: string;
  quantity: number;
};

@Injectable()
export class OrdersService {
  private orders: Order[] = [];

  constructor(
    private readonly notifications: NotificationsService,
  ) {}

  createOrder(orderDto: any) {
    const order: Order = {
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