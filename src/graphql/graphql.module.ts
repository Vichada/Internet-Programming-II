import { Module } from '@nestjs/common';
// import { OrdersResolver } from './orders.resolver';
// import { ReceiptsResolver } from './receipts.resolver';
import { OrdersModule } from '../orders/orders.module';
import { RecieptsModule } from '../reciepts/reciepts.module';
import { OrdersCodeFirstResolver } from './resolvers/order.codefirst.resolver';
import { ReceiptsCodeFirstResolver } from './resolvers/receipt.codefirst.resolver';

@Module({
  imports: [OrdersModule, RecieptsModule],
  // providers: [OrdersResolver, ReceiptsResolver],
  providers: [OrdersCodeFirstResolver, ReceiptsCodeFirstResolver],
})
export class GraphqlModule {}