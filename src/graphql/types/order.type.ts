import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class OrderType {
  @Field(() => ID)
  id: string;

  @Field()
  product: string;

  @Field(() => Int)
  quantity: number;
}
