import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Receipt {
  @PrimaryGeneratedColumn('uuid')
  receiptId: string;

  @Column()
  issuedAt: Date;

  @Column()
  name: string;

  @Column('decimal')
  price: number;
}
