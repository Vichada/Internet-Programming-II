import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Receipt {
  @PrimaryGeneratedColumn('uuid')
  receiptId: string;

  @CreateDateColumn()
  issuedAt: Date;

  @Column()
  name: string;

  @Column('decimal')
  price: number;
}
