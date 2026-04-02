// import { forwardRef, Module } from '@nestjs/common';

import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { NotificationsModule } from 'src/notifications/notifications.module';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ORDERS_SERVICE',
        transport: Transport.TCP, // simple TCP for lab
      },
    ]),
    NotificationsModule, //plain import no forwardRef needed

    // forwardRef(() => NotificationsModule),
  ],
  controllers: [OrdersController],
  providers: [OrdersService],
  // exports: [OrdersService],
})
export class OrdersModule {}
