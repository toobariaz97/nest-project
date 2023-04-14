import { Injectable ,Get, Post, Body} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserParams } from 'src/utils/types';
import { User } from 'src/typeorm/entities/User';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepository:Repository<User>){}

  @Get()
  findAll(){

  }

  @Post()
 async create(userDetails:CreateUserParams){

  console.log(userDetails);
  
    let userData =  this.userRepository.create({...userDetails,createdAt:new Date()});
    await this.userRepository.save(userData)
}

}
