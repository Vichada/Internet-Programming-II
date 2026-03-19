import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReceiptsModule } from './receipts/receipts.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get('DB_HOST') ?? 'localhost',
        port: parseInt(config.get('DB_PORT') ?? '5432'),
        username: config.get('DB_USERNAME') ?? 'postgres',
        password: config.get('DB_PASSWORD') ?? 'postgres',
        database: config.get('DB_NAME') ?? 'mydb',
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
    }),
    ReceiptsModule,
  ],
})
export class AppModule {}
