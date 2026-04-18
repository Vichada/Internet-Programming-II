import { Module } from '@nestjs/common';
import { OrdersResolver } from './orders.resolver';
import { ReceiptsResolver } from './receipts.resolver';
import { OrdersModule } from '../orders/orders.module';
import { RecieptsModule } from '../reciepts/reciepts.module';

@Module({
  imports: [OrdersModule, RecieptsModule],
  providers: [OrdersResolver, ReceiptsResolver],
})
export class GraphqlModule {}