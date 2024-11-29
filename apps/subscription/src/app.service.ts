import { Injectable } from '@nestjs/common';
// import { DatabaseService } from '@wavesync/postgres';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! - Transaction Component';
  }
}
