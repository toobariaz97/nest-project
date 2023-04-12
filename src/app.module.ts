import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forRoot({
    type:"mysql",
    host:"localhost",
    port:3306,
    database:"testUser",
    username:"root",
    synchronize:true
  })],
  controllers: [],
  providers: [],
})
export class AppModule {}
