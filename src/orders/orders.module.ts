import { Module, forwardRef } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { NotificationsModule } from 'src/notifications/notifications.module';
import { OrdersController } from './orders.controller';
// import { OrdersResolver } from '../graphql/orders.resolver';
@Module({
  imports: [forwardRef(() => NotificationsModule)],
  controllers: [OrdersController],
  providers: [OrdersService],
  exports: [OrdersService],
})
export class OrdersModule {}