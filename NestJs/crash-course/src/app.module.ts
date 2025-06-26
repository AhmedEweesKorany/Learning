import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { pgConfig } from 'dbConfig';
import { ConfigModule } from '@nestjs/config';
import { PropertyModule } from './property/property.module';

@Module({
  imports: [UsersModule,TypeOrmModule.forRoot(pgConfig),ConfigModule.forRoot({
      isGlobal: true, // makes it available across the app
    }), PropertyModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
