import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { OrdersService } from '../../orders/orders.service';
import { CreateOrderInput } from '../inputs/create-order.input';
import { OrderType } from '../types/order.type';

@Resolver(() => OrderType)
export class OrdersCodeFirstResolver {
  constructor(private readonly ordersService: OrdersService) {}

  @Query(() => [OrderType])
  orders() {
    return this.ordersService.findAll();
  }

  @Mutation(() => OrderType)
  createOrder(@Args('input') input: CreateOrderInput) {
    return this.ordersService.createOrder(input);
  }
}
