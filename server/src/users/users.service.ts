import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
  ) {}
  async createUser(dto: CreateUserDto): Promise<Users> {
    return await this.userRepository.save(dto);
  }

  async getUsersByEmail(email: string) {
    return await this.userRepository.findOne({ where: { email } });
  }
}
