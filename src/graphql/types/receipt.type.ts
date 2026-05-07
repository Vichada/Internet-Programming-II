import { Field, ID, Float, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ReceiptType {
  @Field(() => ID)
  receiptId: string;

  @Field()
  name: string;

  @Field(() => Float)
  price: number;

  @Field()
  issuedAt: string;
}
