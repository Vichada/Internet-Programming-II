import { ObjectType, Field, ID, Float, GraphQLISODateTime } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@ObjectType()
@Entity('receipts')
export class Receipt {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  receiptId: string;

  @Field(() => GraphQLISODateTime)
  @Column()
  issuedAt: Date;

  @Field()
  @Column()
  name: string;

  @Field(() => Float)
  @Column('decimal', { precision: 10, scale: 2 })
  price: number;
}
