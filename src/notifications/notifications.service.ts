/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
// import { forwardRef, Inject, Injectable } from '@nestjs/common';

import { Inject, Injectable } from '@nestjs/common';
import { EVENT_PUBLISHER } from 'src/core/tokens';
// import { OrdersService } from 'src/orders/orders.service';

type EventPublisher = {
  publish: (event: string, payload: any) => void;
};
@Injectable()
export class NotificationsService {
  constructor(
    // @Inject(forwardRef(() => OrdersService))
    // private readonly ordersService: OrdersService,
    @Inject(EVENT_PUBLISHER) private readonly publisher: EventPublisher,
  ) {}
  notify(event: string, payload: any) {
    // For lab: just log
    this.publisher.publish(event, payload);
    return { ok: true };
  }
}
