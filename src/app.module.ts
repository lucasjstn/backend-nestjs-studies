import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'online_store',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ], //needs ormconfig.json to be configured
  controllers: [AppController, ProductsController],
})
export class AppModule {}
