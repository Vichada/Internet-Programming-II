import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Receipt } from '../database/entities/receipts.entity';
import { ReceiptsController } from './receipts.controller';
import { ReceiptsService } from './receipts.service';
import { ApiKeyGuard } from '../common/guards/api-key.guard';

@Module({
  imports: [TypeOrmModule.forFeature([Receipt])],
  controllers: [ReceiptsController],
  providers: [ReceiptsService, ApiKeyGuard],
})
export class ReceiptsModule {}
