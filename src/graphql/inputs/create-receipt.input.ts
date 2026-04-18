import { Field, Float, InputType } from '@nestjs/graphql';
import { IsDateString, IsNumber, IsString, Min } from 'class-validator';

@InputType()
export class CreateReceiptInput {
  @IsString()
  @Field()
  name: string;

  @IsNumber()
  @Min(0)
  @Field(() => Float)
  price: number;

  @IsDateString()
  @Field()
  issuedAt: string;
}
