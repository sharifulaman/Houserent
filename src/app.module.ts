import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SearchModule } from './search/search.module';
import { pgConfig } from 'dbConfig';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderModule } from './order/orders.module';
@Module({
  imports: [SearchModule,TypeOrmModule.forRoot(pgConfig), OrderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}