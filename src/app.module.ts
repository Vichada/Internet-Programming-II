import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReceiptsModule } from './receipts/receipts.module';
import { NotificationsModule } from './notifications/notifications.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
        url:
          config.get<string>('DATABASE_URL') ??
          `postgres://${config.get('DB_USERNAME')}:${config.get('DB_PASSWORD')}@${config.get('DB_HOST')}:${config.get('DB_PORT')}/${config.get('DB_NAME')}`,
      }),
    }),
    ReceiptsModule,
    NotificationsModule,
    OrdersModule,
  ],
})
export class AppModule {}
