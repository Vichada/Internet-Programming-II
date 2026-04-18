import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Receipt } from '../../database/entities/receipts.entity';
import { ReceiptsService } from '../../reciepts/receipts.service';
import { CreateReceiptInput } from '../inputs/create-receipt.input';

@Resolver(() => Receipt)
export class ReceiptsCodeFirstResolver {
  constructor(private readonly receiptsService: ReceiptsService) {}

  @Query(() => [Receipt])
  receipts() {
    return this.receiptsService.findAll();
  }

  @Mutation(() => Receipt)
  createReceipt(@Args('input') input: CreateReceiptInput) {
    return this.receiptsService.create(input);
  }
}
