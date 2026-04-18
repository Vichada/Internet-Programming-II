import { Field, InputType, Int } from '@nestjs/graphql';
import { IsInt, IsString, Min } from 'class-validator';

@InputType()
export class CreateOrderInput {
  @IsString()
  @Field()
  product: string;

  @IsInt()
  @Min(1)
  @Field(() => Int)
  quantity: number;
}
