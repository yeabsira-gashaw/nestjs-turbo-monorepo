import { Module } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionController } from './transaction.controller';
import { DBModule } from '@wavesync/postgres';
import { TransactionEntity } from '../transaction/transaction.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '@wavesync/mongo';

@Module({
  imports: [
    // DBModule.forRoot({
    //   entities: [TransactionEntity],
    // }),
    DBModule.forFeature([TransactionEntity]),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]), // Register schema
  ],
  controllers: [TransactionController],
  providers: [TransactionService],
})
export class TransactionModule {}
