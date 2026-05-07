import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ReceiptsService } from '../reciepts/receipts.service';
import { ReceiptType } from './types/receipt.type';

//@Resolver('Receipt')
@Resolver(() => ReceiptType)
export class ReceiptsResolver {
  constructor(private readonly receiptsService: ReceiptsService) {}

  @Query('receipts')
  receipts() {
    return this.receiptsService.findAll();
  }

  @Mutation('createReceipt')
  createReceipt(
    @Args('name') name: string,
    @Args('price') price: number,
    @Args('issuedAt') issuedAt: string,
  ) {
    return this.receiptsService.create({ name, price, issuedAt });
  }
}