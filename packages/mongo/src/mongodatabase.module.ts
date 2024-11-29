import { DynamicModule, Module } from '@nestjs/common';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { ConfigService } from '@wavesync/config';
import { ConfigDatabase } from '@wavesync/config';
import { ConfigModule } from '@wavesync/config';
import { DbConfig } from './mongodatabase.interface';

@Module({})
export class MongoDBModule {
  private static getConnectionOptions(
    config: ConfigService,
    dbConfig: DbConfig,
  ): MongooseModuleOptions {
    const dbData = config.get().mongo;
    console.log({ dbData });
    if (!dbData) {
      throw new Error('Database configuration not found.');
    }
    const connectionOptions = this.getConnectionOptionsMongo(dbData);
    return {
      ...connectionOptions,
    };
  }

  private static getConnectionOptionsMongo(
    dbData: ConfigDatabase,
  ): MongooseModuleOptions {
    return {
      uri: dbData.url, // MongoDB connection string
      //   useNewUrlParser: true, // ensure MongoDB driver uses the new parser
      //   useUnifiedTopology: true, // enables the new topology engine
      // You can add additional options for connection management if necessary
    };
  }

  public static forRoot(dbConfig: DbConfig): DynamicModule {
    return {
      module: MongoDBModule,
      imports: [
        MongooseModule.forRootAsync({
          imports: [ConfigModule],
          useFactory: (configService: ConfigService) => {
            return MongoDBModule.getConnectionOptions(configService, dbConfig);
          },
          inject: [ConfigService],
        }),
      ],
      controllers: [],
      providers: [],
      exports: [],
    };
  }

  /**
   * For additional feature modules using MongooseModule.forFeature
   * @param schemas Array of schema classes
   * @returns DynamicModule
   */
  public static forFeature(schemas: any[]): DynamicModule {
    return {
      module: MongoDBModule,
      imports: [MongooseModule.forFeature(schemas)],
      exports: [MongooseModule],
    };
  }
}
