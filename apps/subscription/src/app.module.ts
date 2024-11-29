import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransactionModule } from './transaction/transaction.module';
import { DBModule } from '@wavesync/postgres';
import { MongoDBModule, UserSchema } from '@wavesync/mongo';
import { TransactionEntity } from './transaction/transaction.entity';

@Module({
  imports: [
    TransactionModule,
    DBModule.forRoot({
      entities: [TransactionEntity],
    }),
    MongoDBModule.forRoot({
      schemas: [UserSchema], // Optional: Pass schemas or other configurations if needed
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
