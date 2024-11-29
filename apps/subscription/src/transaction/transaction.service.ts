import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { TransactionEntity } from './transaction.entity';
import { User } from '@wavesync/mongo';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(TransactionEntity)
    private userRepo: Repository<TransactionEntity>,
    @InjectModel('User') private readonly userModel: Model<User>, // Inject model
  ) {}
  async fetchTransaction() {
    try {
      return this.userModel.find().exec();
      // const user: User = {
      //   name: 'John Doe',
      //   email: 'yeabme@gmail.com',
      //   password: 'password',
      // };
      // const newUser = new this.userModel(user);
      // return newUser.save();
      // return await this.userRepo.find({});
      return [
        {
          me: 'True',
        },
      ];
    } catch (err) {
      console.log(err);
      console.log(err);
    }
  }
}
