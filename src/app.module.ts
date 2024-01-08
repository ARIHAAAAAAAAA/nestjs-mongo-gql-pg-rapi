import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { CatsModule } from './cats/cats.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import mongodbConfig from './cats/config/mongodb.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [mongodbConfig],
      isGlobal: true
   }),
   MongooseModule.forRootAsync({
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => ({
      uri: configService.get('mongodb').uri
    })
  }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      include: [CatsModule],
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      // playground: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: '1215',
      username: 'postgres',
      entities: [User],
      database: 'postgres',
      synchronize: true,
      logging: true,
    }),
    UsersModule,
    CatsModule,
  ],
})
export class AppModule { }
