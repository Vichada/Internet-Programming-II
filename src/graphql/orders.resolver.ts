import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { OrdersService } from '../orders/orders.service';

@Resolver('Order')
export class OrdersResolver {
  constructor(private readonly ordersService: OrdersService) {}

  @Query('orders')
  orders() {
    return this.ordersService.findAll();
  }

  @Mutation('createOrder')
  createOrder(
    @Args('product') product: string,
    @Args('quantity') quantity: number,
  ) {
    return this.ordersService.createOrder({ product, quantity });
  }
}