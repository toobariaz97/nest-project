import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './typeorm/entities/User';
@Module({
  imports: [TypeOrmModule.forRoot({
    type:"mysql",
    host:"localhost",
    port:3306,
    database:"testUser",
    username:"root",
    entities:[User],
    synchronize:false
  }), UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
