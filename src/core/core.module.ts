import { Module } from '@nestjs/common';
import { EVENT_PUBLISHER } from './tokens';

@Module({
  providers: [
    {
      provide: EVENT_PUBLISHER, // token as the key
      useValue: {
        publish: (event: string, payload: any) => {
          console.log(`[CORE EVENT] ${event}`, payload);
        },
      },
    },
  ],
  exports: [EVENT_PUBLISHER], // export so others can use it
})
export class CoreModule {}
