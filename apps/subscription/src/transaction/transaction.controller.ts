import { Body, Controller, Get } from '@nestjs/common';
import { TransactionService } from './transaction.service';

@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}
  @Get()
  async findAll() {
    return await this.transactionService.fetchTransaction();
  }
}
