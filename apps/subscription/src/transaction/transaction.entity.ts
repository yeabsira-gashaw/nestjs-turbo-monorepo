import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Transaction')
export class TransactionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userCode: string;

  @Column()
  transactionID: number;
}
