import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot()], //needs ormconfig.json to be configured
  controllers: [AppController, ProductsController],
})
export class AppModule {}
