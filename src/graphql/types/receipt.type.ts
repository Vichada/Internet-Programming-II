import { Field, ID, ObjectType, Float } from '@nestjs/graphql';

@ObjectType()
export class ReceiptType {
  @Field(() => ID)
  receiptId: string;

  @Field()
  issuedAt: string;

  @Field()
  name: string;

  @Field(() => Float)
  price: number;
}
